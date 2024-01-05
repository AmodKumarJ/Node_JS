const readline = require('readline')
const fs = require('fs')
const http=require('http')
const url = require('url') 
const replaceHtml = require('./modules/replaceHtml')
//step1:Create server 
const html = fs.readFileSync('./navbar.html','utf-8')
let products = JSON.parse(fs.readFileSync('./Data/products.json','utf-8'))
let productListHtml = fs.readFileSync('./Data/products.html','utf-8')
let productDtailHtml = fs.readFileSync('./productDetail.html','utf-8')


const server = http.createServer((request,response)=>{//request,response 
        let {query,pathname: path} = url.parse(request.url,true)
        // console.log(x)
        //let path = request.url;
        if(path == '/' || path.toLocaleLowerCase() == '/home'){
            response.writeHead(200  ,{'Content-type':'text/html',
            'my-header':'Hello!,Word' })//setting the status code this method is using
            response.end(html.replace('//////',productListHtml))
        }
        else if(path.toLocaleLowerCase()=='/about'){
            response.writeHead(200)
            response.end(html.replace('//////','About'))
           
        }
        else if(path.toLocaleLowerCase()=='/contact'){
            response.writeHead(200)
            response.end(html.replace('//////','Contact')) 
        }
        else if(path.toLocaleLowerCase()=='/products'){

            if(!query.id){
                let productHtmlArray =  products.map((prod)=>{
                  return replaceHtml(productListHtml,prod)
                })
            let productResponseHtml = html.replace('//////',productHtmlArray.join(','))
            response.writeHead(200,
                {'Content-type':'text/html'}
                )
            response.end(productResponseHtml)

            }
            else{
                let prod = products[query.id]
                let productDetilResponseHtml = replaceHtml(productDtailHtml,prod)
                response.end(html.replace('//////',productDetilResponseHtml));

            }
          
            
        }
        else{
            response.writeHead(404)//before the response.end()
            response.end(html.replace('//////','ERROR 404'))
           
        }

})
//step2:start the server
server.listen(8000,'127.0.0.1',()=>{//port,ip-add,callback
    console.log("Server started")
}) 