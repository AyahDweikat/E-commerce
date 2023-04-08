import { useSearchParams, useLocation, useParams } from 'react-router-dom';


export function withRoute(MyComponent) {
  return function (props){
    const params = useParams();
    const location = useLocation();
    const queryString = useSearchParams();
    return <MyComponent {...props} 
    params ={params} 
    location ={location}
    queryString={queryString} />
  } 
}
