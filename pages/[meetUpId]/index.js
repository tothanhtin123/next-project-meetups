// domain/:meetUpId
import { MongoClient, ObjectID } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";
import MeetupDetails from "../../components/meetups/MeetupDetails";
const MeetupDetailsPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetails
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
};

//hàm này chạy trước getStaticProps - dùng để xử lý tham số trên đường dẫn
export const getStaticPaths = async () => {
  //kết nối mongo database
  const client = await MongoClient.connect(
    "mongodb+srv://tothanhtin12345:Anhyeuem123@cluster0.fe40c.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  //truy cập đến meetups document
  const meetupsCollection = db.collection("meetups");
  //lấy mảng các meet up id để đặt vào paths
  const meetupsId = await meetupsCollection.find({}, { _id: 1 }).toArray(); // tham số thứ hai {_id:1} chỉ ra đối tượng muốn lấy từ tập dữ liệu
  client.close();
  return {
    //nếu fallback: false thì chỉ trả về những giá trị tương ứng với key (tên file hoặc thư mục tham số) có giá trị trong paths
    // ví dụ như domain/m1 => trong paths có meetUpId: 'm1' => trả về phần params chứa  meetUpId: 'm1 => ngược lại hiển thị một 404 page
    //nếu fallback: true thì sẽ trả về giá trị mà người dùng nhập trên path - nếu không có trong paths thì trả về một trang rỗng
    //ví dụ như domain/m1 => nếu có trong paths thì trả về {params:{meetUpId:'m1'}} như false
    // nhưng nếu không có trong paths thì trả về một trang rỗng chứ không phải một trang 404 như false
    // lưu ý tham số trả về luôn phải ở dạng params: { keyname(tương ứng với tên file hoặc tên thư mục tham số):giá trị }
    //nếu fallback: 'blocking' thì nó cũng sẽ trả về như false và true nếu như tham số có trong paths
    // nhưng nếu không có nó sẽ chờ đến khi có
    //trong deploy, người ta thường dùng blocking hơn
    //vì paths có thể là một mảng dữ liệu cần thời gian để lẩy ra
    fallback: 'blocking',
    //dựa vào tham số trên đường dẫn - một đối tượng tham số tương ứng trong mảng paths sẽ được lấy ra và truyền cho hàm getStaticProps
    //paths trong trường hợp này sẽ nhận dữ liệu csdl
    paths: meetupsId.map((data) => {
      return {
        params: {
          meetUpId: data._id.toString(),
        },
      };
    }),
    // paths:[
    //     {

    //         params:{
    //             //key giá trị phải trùng với tên file hoặc thư mục tham số
    //             meetUpId: 'm1',
    //         }
    //     },
    //     {
    //         params:{
    //             meetUpId: 'm2',
    //         }
    //     },

    // ]
  };
};

//sử dụng getStaticProps vì project hiện tại không có chức năng thay đổi
//bên cạnh đó thực tế thì meetup không thay đổi thường xuyên

export const getStaticProps = async (context) => {
  //muốn lấy giá trị từ context.params thì trước hết phải có hàm getStaticPaths
  const meetUpId = context.params.meetUpId;
  console.log(meetUpId);
  //truy cập mongo để lấy chi tiết một id
  //kết nối mongo database
  const client = await MongoClient.connect(
    "mongodb+srv://tothanhtin12345:Anhyeuem123@cluster0.fe40c.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  //truy cập đến meetups document
  const meetupsCollection = db.collection("meetups");
  //lấy dữ liệu 1 meet up dựa vào id
  const meetup = await meetupsCollection.findOne(
    { _id: ObjectID(meetUpId) },
    { _id: 0 }
  );
  client.close();
  console.log(meetup);
  return {
    props: {
      meetupData: {
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
        image: meetup.image,
      },
    },
  };
};

export default MeetupDetailsPage;
