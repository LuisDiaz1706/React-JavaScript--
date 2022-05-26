/// Async - Await


const getImagen = async()=>{
  try {
       
 const apiKey = "QQ1hN8ziQqXIMxAJMkRn9buxX50GPJ3K"
 const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
 const {data} = await resp.json();
 console.log(data)
 const {url} = data.images.original;

 const img = document.createElement("img");
    img.src = url;
    document.body.append(img)

  } catch (error) {
      console.warn(error)
  }

}

getImagen()







