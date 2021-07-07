// domain/api/new-meetup
//api để thêm một meetup vào mongodb
//code của file này sẽ không hiển thị ở phía người dùng
import { MongoClient } from "mongodb";
//khi tạo api thì luôn luôn đặt lên là handler
const handler = async (req,res) => {
    if(req.method==='POST'){
        const data = req.body;
        const {title,image,address,description} = data;
        //kết nối mongo database
        const client = await MongoClient.connect(
            'mongodb+srv://tothanhtin12345:Anhyeuem123@cluster0.fe40c.mongodb.net/meetups?retryWrites=true&w=majority'
        )
        const db = client.db();
        //truy cập đến meetups document
        const meetupsCollection = db.collection('meetups');
        //chèn một dữ liệu vào meetups document
        const result = await meetupsCollection.insertOne(data);
        console.log(result);
        //đóng kết nối
        client.close();
        //trả về kết quả thêm thành công
        res.status(201).json({
            message:'Meetup inserted'
        })
    
    }


}

export default handler;