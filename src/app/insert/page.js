"use client";
import { createClient } from '@/utils/supabase/client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'

export default function Insert(){
  const router = useRouter()
  const supabase = createClient();
  const [formData, setFormData] = useState({
    title:'', 
    content:'', 
    url:'',
    review:'',
    reviewer:'',
    rep1_desc:'',
    rep2_desc:'',
    rep1_img:'',
    rep2_img:'',
    thumbnail:'' 
  });  
  const [thumbfile, setThumbfile] = useState(null);
  const [rep1File, setRep1File] = useState(null);
  const [rep2File, setRep2File] = useState(null);

  const [authForm, setAuthForm] = useState({email:'', password:''});
  const [user, setUser] = useState(null); //로그인한 유저 정보 할당

  useEffect(()=>{
    const checkUser = async ()=>{      
      //유저 정보 조회
      const { data: { user } } = await supabase.auth.getUser(); 
      setUser(user);
    }
    checkUser();
  },[]);

  const handleRep1FileChange = (e) =>{
    const f = e.target.files[0];
    setRep1File(f);
  }
  const handleRep2FileChange = (e) =>{
    const f = e.target.files[0];
    setRep2File(f);
  }
  const handleThumbFileChange = (e) =>{
    const f = e.target.files[0];
    setThumbfile(f);
  }


  async function InsertData(e){
    e.preventDefault();
    /*
    let thumbnailPath = null;
    if(thumbfile){
      thumbnailPath = await uploadFile(thumbfile); //파일 경로 반환      
    }
    const data = {
      ...formData,
      thumbnail:thumbnailPath
    }
    */
   /*
   const uploadTasks = {
    thumbnail: thumbfile ? uploadFile(thumbfile) : null,
    rep1_img: rep1File ? uploadFile(rep1File) : null,
    rep2_img: rep2File ? uploadFile(rep2File) : null
   }
  */
   const data = {
    ...formData,
    thumbnail: thumbfile ? await uploadFile(thumbfile, 'thumbnails') : '',
    rep1_img: rep1File ? await uploadFile(rep1File, 'rep') : '',
    rep2_img: rep2File ? await uploadFile(rep2File,'rep') : ''     
  }
    const { error } = await supabase
    .from('portfolio')
    .insert(data)
    if(error){
      console.log('데이터 입력 실패', error);
    } else{
      alert('데이터 입력 완료!');
      router.push('/');
    }

  }

  // Upload file using standard upload
  async function uploadFile(file,path) {
    const uniqueFileName = `${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage.from('portfolio').upload(`${path}/${uniqueFileName}`, file)
    if (error) {
      // Handle error
      console.log('썸네일 업로드 실패', error);
    } else {
      // Handle success
      console.log('썸네일 업로드 성공', data);
      return data.path; //파일 경로 반환
    }
  }

  const handleChange = (e)=>{
    //let value = e.target.title.value;
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]:value
    });
  }
  const handleAuthChange = (e)=>{
    //let value = e.target.title.value;
    const {name, value} = e.target;
    setAuthForm(prev=>({...prev, [name]:value}));
  }
  const handleLogin = async (e)=>{
    e.preventDefault();
    const {data, error} = await supabase.auth.signInWithPassword(authForm)
    if(error){
      alert('로그인 실패', error.message);
      console.log(error);
    }else{
      alert('로그인 성공');
      //setUser(data.user); //로그인한 유저의 유저 정보 반영
      router.refresh();//로그인후 새로고침
    }
  }

  //로그인 전 로그인 폼
  if(!user){
    return(
      <div className="container about_content shadow">
      <h2>로그인</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3"> 
          <input type="email" className="form-control" name="email" placeholder="Your Email" onChange={handleAuthChange} />
        </div>
        <div className="mb-3">         
        <input type="password" className="form-control" name="password" placeholder="Your password" onChange={handleAuthChange} />
        </div>
        <button className='btn btn-primary'>로그인</button>    
      </form>
    </div>
    )
  }

  //로그인 후 입력폼
  return(
    <div className="container about_content shadow">
      <h2>데이터 입력</h2>
      <form onSubmit={InsertData}>
        <div className="mb-3"> 
          <input type="text" className="form-control" name="title" placeholder="title" onChange={handleChange} />
        </div>
        <div className="mb-3">         
          <textarea className="form-control" name="content" rows="3" placeholder="content" onChange={handleChange}></textarea>
        </div>
        <div className="mb-3"> 
          <input type="url" className="form-control" name="url" placeholder="url" onChange={handleChange} />
        </div>        
        <div className="mb-3">         
          <textarea className="form-control" name="review" rows="3" placeholder="review" onChange={handleChange} ></textarea>
        </div>
        <div className="mb-3"> 
          <input type="text" className="form-control" name="reviewer" placeholder="Review Writer" onChange={handleChange} />
        </div>  
        <div className="mb-3">
          <input className="form-control" type="file" title="rep1_img" name="rep1_img" onChange={handleRep1FileChange}/>
        </div>  
        <div className="mb-3"> 
          <input type="text" className="form-control" name="rep1_desc" placeholder="img1 description" onChange={handleChange} />
        </div>             
        <div className="mb-3">
          <input className="form-control" type="file" name="rep2_img" title="rep2 img" onChange={handleRep2FileChange}/>
        </div>  
        <div className="mb-3"> 
          <input type="text" className="form-control" name="rep2_desc" placeholder="img2 description" onChange={handleChange} />
        </div>    
        <div className="mb-3">
          <input className="form-control" type="file" name="thumbnail" title="thumbnail" onChange={handleThumbFileChange}/>
        </div> 
        <button className='btn btn-primary'>전송</button>    
      </form>
    </div>
  )

}