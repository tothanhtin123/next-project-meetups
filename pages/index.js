// domain/
import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';
import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

//props là tham số nhận được từ hàm getStaticProps
const HomePage = (props) => {
   console.log('ok');
    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta
                    name='description'
                    content='Browse a huge list of highly active React meetups!'
                />
            </Head>
            <MeetupList meetups = {props.meetups}/>
        </Fragment>
     
            
        
    );
}
//hàm này sẽ chạy trước hàm render component - nó chạy trong suốt quá trình pre-render page
//thích hợp để gọi api, lấy file, dữ liệu để hiển thị lên view trước khi mà nó được render ra hoàn toàn
//dùng cái này ta sẽ tránh được việc dùng useEffect và useState,
export const getStaticProps = async () => {
    //vì hàm này chỉ chạy trong quá trình build và khi deploy lên server
    // không chạy ở phía người dùng
    // nên ta gọi trực tiếp lấy dữ liệu từ mongo ở đây cũng được
    
    const client = await MongoClient.connect(
        'mongodb+srv://tothanhtin12345:Anhyeuem123@cluster0.fe40c.mongodb.net/meetups?retryWrites=true&w=majority',
    );
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    //tìm tất cả dữ liệu từ meetups document và biến chúng thành một mảng
    const meetups = await meetupsCollection.find().toArray();
    //đóng kết nối
    client.close();
    
    return {
        props:{
            //map dữ liệu lấy từ mongo
            meetups:meetups.map(meetup=>{
                return {
                    id:meetup._id.toString(),
                    title: meetup.title,
                    address:meetup.address,
                    image:meetup.image,
                    
                }
            })
        },
        //thuộc tính reload lại page sau 1 giây
        revalidate: 1,
    }
}

//hàm này sẽ cũng tương tự getStaticProps
//nhưng nó được chạy lại sau khi được deploy lên server
// và mỗi có request đến server
//context: là đối tượng chứa req, res của ngouiwf dùng
// export const  getServerSideProps = async (context)=>{
//     const req =context.req;
//     const res = context.res;

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS,
//         }
//     }
// }

export default HomePage;