import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';
import { useEffect } from 'react';

 const HomeCategoryHook = () => {
    
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllCategory());
    }, []);
   //get last category state from redux
    const category = useSelector((state) => state.allCategory.category);
    //get last loading state fro redux
    const loading = useSelector((state) => state.allCategory.loading);

    return[category,loading]
}

export default HomeCategoryHook