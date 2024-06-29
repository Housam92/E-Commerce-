import React,{useState} from 'react'
import { getOneCategory } from '../../redux/actions/subCategoryAction';
import { createProduct, getOneProduct, updateProduct } from '../../redux/actions/productsAction';
import notify from "../../hook/useNotification"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import getAllCategory from '../../redux/actions/categoryAction';
import getAllBrand from '../../redux/actions/brandAction';

 const AdminEditProductHook = (id) => {

    const dispatch = useDispatch();
    useEffect(() => {
        const run = async ()=>{
       await dispatch(getOneProduct(id))
       await dispatch(getAllCategory());
       await dispatch(getAllBrand());
      
}
run()
}, []);

// to show hidden color Picker
const [showColor, setShowColor] = useState(false)
    
// to store all picked colors 
const [colors, setColors] = useState([])

const handelChangeComplete=(color)=>{
    setColors([...colors, color.hex])
    setShowColor(!showColor)
    }


const removeColor = (co)=>{
const newColor= colors.filter((e)=> e!== co)
setColors(newColor)
    }



// to get one product details
   const item = useSelector((state) => state.allProducts.oneProduct);
// to get last category state
   const category = useSelector((state) => state.allCategory.category);
   //get last brand state from redux
   const brand = useSelector((state) => state.allBrand.brand);
   // get last sub category from redux
   const subCat = useSelector((state) => state.subCategory.subCategory);


   const onSelect = (selectedList) => {
setSelectedSubId(selectedList)
   }
   const onRemove = (selectedList) => {
       setSelectedSubId(selectedList)

   }

   const [options, setOptions] = useState([])

   // values image product
   const [images, setImages] = useState({});

   // values state
   const [prodName, setProdName] = useState("");
   const [prodDescribion, setProdDescribion] = useState("");
   const [priceBefore, setPriceBefore] = useState("Price Before Discount");
   const [priceAfter, setPriceAfter] = useState("Price After Discount");
   const [quty, setQty] = useState("Available Quantity");
   const [catId, setCatId] = useState("");
   const [brandId, setBrandId] = useState("");
   const [subCatId, setSubCatId] = useState([]);
   const [selectedSubId, setSelectedSubId] = useState([]);
   const[loading,setLoading]=useState(true)

   useEffect(() => {
   if ((item && item.data)){
    console.log("itemdata",item.data)
   setImages(item.data.images)
   setProdName(item.data.title)
   setProdDescribion(item.data.description)
   setPriceBefore(item.data.price)
   setQty(item.data.quantity)
   setCatId(item.data.category)
   setBrandId(item.data.brand)
   setColors(item.data.availableColors)
   }
   }, [item])
   
// to change name state 

const onChangeProdName = (event)=>{
event.persist()
setProdName(event.target.value)
}

const onChangeDescName = (event)=>{
    event.persist()
    setProdDescribion(event.target.value)
    }

    const onChangePriceBefore = (event)=>{
        event.persist()
        setPriceBefore(event.target.value)
        }

        const onChangePriceAfter = (event)=>{
            event.persist()
            setPriceAfter(event.target.value)
            }

            const onChangeQty = (event)=>{
                event.persist()
                setQty(event.target.value)
                }

                const onChangeColor = (event)=>{
                    event.persist()
                    setShowColor(!showColor)
                    }
   //when select category we store the id 
   const onSelectCategory = async (e)=>{
    setCatId(e.target.value)
}
useEffect(() => {
    if (catId != 0) {
        const run = async () => {
            await dispatch(getOneCategory(catId))
        }
        run();
    }
}, [catId])

useEffect(() => {
    if (subCat) {
        setOptions(subCat.data)
    }
}, [subCat])
  

   //when select brand we store the id 

   const onSelectBrand = (e)=>{
       setBrandId(e.target.value)
       
       }

// to convert base 64 img to fili :
function dataURLtoFile(dataurl, filename) {

       var arr = dataurl.split(','),
           mime = arr[0].match(/:(.*?);/)[1],
           bstr = atob(arr[1]), 
           n = bstr.length, 
           u8arr = new Uint8Array(n);
           
       while(n--){
           u8arr[n] = bstr.charCodeAt(n);
       }
       
       return new File([u8arr], filename, {type:mime});
   }
   // to save data
   const handelSubmit= async(e)=>{
    e.preventDefault();
    if (catId === 0 || prodName === "" || prodDescribion === "" || images.length <= 0 || priceBefore <= 0) {
        notify("fill the data","warn")
        return;
       }


       // convert one base 64 img to file
       const imgCover = dataURLtoFile(images[0],Math.random()+".png")

       console.log('Images:', images);
        // convert array of base 64 img to file
        const itemImages = Object.values(images).map((image, index) => {
           return dataURLtoFile(image, Math.random() + ".png");
         });
         
       // the key should match the api keys  
       const formData = new FormData();
       formData.append("title",prodName)
       formData.append("description",prodDescribion)
       formData.append("quantity",quty)
       formData.append("price",priceBefore)
       formData.append("imageCover",imgCover)
       formData.append("category",catId)
       formData.append("brand",brandId)
       
       itemImages.map((item)=>formData.append("images",item))   
       colors.map((color)=>formData.append("availableColors",color))   
       selectedSubId.map((item)=>formData.append("subcategory",item._id))
       setTimeout(async () => {
        setLoading(true)
        await dispatch(updateProduct(id, formData))
        setLoading(false)
    }, 1000);

}
// create adding product msg
const product = useSelector((state) => state.allProducts.products);

   useEffect(() => {
   if(loading===true){
       setCatId(0)
       setImages([])
       setColors([])
       setPriceBefore("")
       setPriceAfter("")
       setProdName("")
       setProdDescribion("")
       setSelectedSubId([])
       setQty("")
       setBrandId(0)
       setTimeout(()=>setLoading(true),1500)

       if (product) {
           if (product.status === 201) {
               notify("the product has been edited", "success");
           } 
       }
       
   }
   }, [loading])

return [catId,brandId,onChangeProdName,onChangeDescName,onChangePriceBefore,onChangePriceAfter,onChangeQty,onChangeColor,showColor, category, brand, priceAfter, images, setImages, onSelect, onRemove, options, removeColor, onSelectBrand, priceBefore, handelChangeComplete, onSelectCategory, handelSubmit, quty, prodName,prodDescribion,colors]
}
export default AdminEditProductHook