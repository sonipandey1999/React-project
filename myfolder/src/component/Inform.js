import '../style.css'
//  const Inform = () => {
//   return (
//     <div className='form'>
//         Name :
//         <input type="text" placeholder="Enter Your name"/>
//         <br></br>
//         Course :
//         <input type="text" placeholder="Enter your course"/>
//         <br></br>
//         <button className='btn'>Display</button>   
//     </div>
//   )
// }
// export default Inform;


export default function Inform() {
  const user={
    name: "soni",
    course: "mca",
    image: "https://i.imgur.com/yXOvdOSs.jpg",
    size: "60"
  }
  return (
    <div className='form card'>
        <img src='./image/image.jpg' alt="" style={{width:80,height:80}}/>
        <br></br>
        Name :
        <input type="text" placeholder="Enter Your name"/>
        <br></br>
        Course :
        <input type="text" placeholder="Enter your course"/>
        <br></br>
        <button className='btn'>Display</button>  
        {/* <p>{user.name}</p> 
        <p>{user.course}</p>  */}
    </div>
  )
}
