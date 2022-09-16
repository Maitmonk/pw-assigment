let fi;


function GetFileSizeNameAndType()
        {
        fi = document.getElementById('file'); // GET THE FILE INPUT AS VARIABLE.

        var totalFileSize = 0;
        var rnd=0;
        var fst="";
        // VALIDATE OR CHECK IF ANY FILE IS SELECTED.
        if (fi.files.length > 0)
        {
            
            // RUN A LOOP TO CHECK EACH SELECTED FILE.
            for (var i=0; i <= fi.files.length - 1; i++)
            {   
                //ACCESS THE SIZE PROPERTY OF THE ITEM OBJECT IN FILES COLLECTION. IN THIS WAY ALSO GET OTHER PROPERTIES LIKE FILENAME AND FILETYPE
                var fsize = fi.files.item(i).size;
                if(fsize>=0 && fsize<1000){
                    fst="Byte"
                    rnd=1000;
                }
                else if(fsize>=1000 && fsize<1000000){
                    fst="KB"
                    rnd=1000000;
                }
                else if(fsize>=1000000 && fsize<1073741824){
                    fst="MB"
                    rnd=1073741824;
                }
                else if(fsize<1073741824 && fsize<1099511627776){
                    fst="GB"
                    rnd=1000000000000;
                }
                else{
                    fst="TB"
                   rnd=1099511627776;
                }
                totalFileSize = totalFileSize + fsize;
                var newdiv = document.createElement('div');
                newdiv.innerHTML = 
                '<br /> ' + 'File Name is <b>' + fi.files.item(i).name.split('.')[0]
                +
                '</b> and Size is <b>' + Math.round((fsize % rnd)) //DEFAULT SIZE IS IN BYTES SO WE DIVIDING BY 1024 TO CONVERT IT IN KB
                +
                '</b> <b>'+fst+" " 
                var btn = document.createElement('button');
                btn.innerHTML = 'Info';

                btn.classList.add(`info-btn`);
                
                newdiv.appendChild(btn);

                document.getElementById('fp').appendChild(newdiv);

   
            }
            
            
        }
        document.getElementById('divTotalSize').innerHTML = "Total File(s) Size is <b>" + Math.round(totalFileSize / 1024) + "</b> KB";
        var btns = Array.from(document.getElementsByClassName('info-btn'));
        for(let i = 0; i < btns.length; i++){
            
                btns[i].addEventListener('click', ()=> myFunction(fi.files.item(i)));
            
        }  
}

  function myFunction(item) {
       
        document.getElementById("new1").innerHTML=item.name.split('.')[0];
        document.getElementById("new2").innerHTML=item.size;
        document.getElementById("new3").innerHTML=item.type.split('/')[1];
        document.getElementById("new4").innerHTML=item.webkitRelativePath;
        document.getElementById("new5").innerHTML=item.lastModifiedDate;

        // console.log(item);
        
           
      }