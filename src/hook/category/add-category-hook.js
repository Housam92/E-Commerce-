import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import notify from '../../hook/useNotification';
import avatar from '../../images/avatar.png'
import { createCategory } from '../../redux/actions/categoryAction';
import 'react-toastify/dist/ReactToastify.css';


const AddCategoryHook = () => {

  const dispatch = useDispatch();
  const [img,setImg]= useState(avatar);
  const [name,setName]= useState("");
  const [selectedFile,setSelectedFile]= useState(null)
  const [loading,setLoading]= useState(true)
  const [isPress,setIspress]=useState(false)

// to change name state :
const onChaneName = (event)=>{
    event.persist();
    setName( event.target.value)}

// to get loading state from redux
   const onImageChange = (event)=>{
    if (event.target.files && event.target.files[0]) // files mean if i chose a photo and save it
    setImg(URL.createObjectURL(event.target.files[0]))
    setSelectedFile(event.target.files[0])
    }

    //Save Data in database
 const handelSubmit = async (event)=>{
     event.preventDefault();
  if (name===""|| selectedFile===null) {
   notify("please fill the requried data","warn")
    return;
  }
     
     const formData = new FormData()
     formData.append("name",name)
     formData.append("image",selectedFile)
     setLoading(true)
    setIspress(true)
   await dispatch(createCategory(formData))
   setLoading(false)
     
 }
 useEffect(()=>{
if (loading === false)

{
    
    setName("")
    setImg(avatar)
    setSelectedFile(null)
  setTimeout( ()=>setIspress(false),1000)  
    notify()
}
},[loading]) // this means when loadin change do the above code : setimg and setname...

return [img,name,loading,isPress,handelSubmit,onImageChange,onChaneName]
}

export default AddCategoryHook