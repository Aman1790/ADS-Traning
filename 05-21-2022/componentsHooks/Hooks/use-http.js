import React,{useState, useCallback} from "react";

const useHttp =() =>{
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequests = useCallback(async (Requestconfig,applydata) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
            Requestconfig.url,{
                method: Requestconfig.method ? Requestconfig.method :'GET',
                headers:Requestconfig.headers ? Requestconfig.headers :{},
                body:JSON.stringify(Requestconfig.body) ? JSON.stringify(Requestconfig.body):null,
            }
            
        );
  
        if (!response.ok) {
          throw new Error('Request failed!');
        }
  
        const data = await response.json();
        applydata(data)
      
      } catch (err) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    },[]);

    return{
      isLoading:isLoading,
      erroe:error,
      sendRequest:sendRequests
    }
}
export default useHttp;

