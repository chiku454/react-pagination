
export default function _callAPI(url){
    fetch(url) 
      
    .then(res => { return res.json()})
    .then(data => {
      // data = res;
      return data;
    //   this.setState({
    //       tileData: data.res_data,
    //       isDataFetch: false,
    //       msg:data.res_str
    //   })
    })
    .catch(function(err) {
      console.log('err', err)
    });

}
