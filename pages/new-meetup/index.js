// domain/new-meetup
import  { useRouter } from 'next/router';
import { Fragment } from 'react';
import Head from 'next/head';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
    const router = useRouter();
    const addMeetupHandler = async (enteredMeetupData) => {
        //truy cấp đến api new-meetup mà ta tạo trong thư mục pages/api
        //vì đây là api trong project nên ta chỉ cần fetch đến tên path nó
        //chứ không ghi chi tiết ra thêm tên domain
        const response = await fetch('/api/new-meetup',{
            method:'POST',
            body: JSON.stringify(enteredMeetupData),
            headers:{
                'Content-Type':'application/json',
            },
        });
        const data = await response.json();
        //chuyển trang đến trang chủ - nơi hiện toàn bộ meet up
        router.push('/');
    }
    return (
        
        <Fragment>
            <Head>
                <title>Add a New Meetup</title>
                <meta
                    name='description'
                    content='Add your own meetups and create networking oppotunities'
                />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </Fragment>
    );
}
export default NewMeetupPage;