
function BlogCreate() {
  return (
    <div className='100-w vh-100 bg-light'>
      <div className="vh-100 container">
        <div className="row">
          <div className="col-12 mt-5 pt-5 mb-2"><h3>Create Post</h3></div>
        </div>
        <form className="row g-3">
          <div className="col-8">
            <div className="p-5 rounded border shadow-lg">
              <div className="row">
                <div className=' col-md-12 mb-2'>
                  <label htmlFor='title'>Title <span>*</span></label>
                  <input type='text' placeholder='Blog Title' className='form-control'></input>
                </div>
                <div className=' col-md-12 mb-2'>
                  <label htmlFor='slug'>Slug <span>*</span></label>
                  <input type='text' placeholder='slug' className='form-control'></input>
                </div>
                <div className=' col-md-12 mb-2'>
                  <label htmlFor='blog-content'>Content <span>*</span></label>
                  <div className="border rounded p-3">
                    <div className="m-0 p-0">
                      <p>Block for edit button functions</p>
                      <hr></hr>
                      <textarea className="form-control border-0" name='blog-content' rows="10"></textarea>
                    </div>
                  </div>
                </div>
                <div className='col-12'>
                  <button className='btn btn-primary'>Create Blog</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="p-4 rounded border shadow-lg mb-5">
              <div>
                <p>Featured Image</p>
                <hr></hr>
                </div>
                <div className=' col-md-12 mb-2'>
                  <label htmlFor='imgFile' className="form-label">Drag & Drop your files or Browse</label>
                  <input type='file' className='form-control' id="imgFile"></input>
                </div>
            </div>
            <div className="p-4 rounded border shadow-lg">
              <div className=' col-md-12 mb-2'>
                <label htmlFor='autName' className="form-label">Author <span>*</span></label>
                <select className="form-select">
                  <option selected>Select an option</option>
                  <option value="1">Henry Olwa</option>
                  <option value="2">Raymond Lukwago</option>
                  <option value="3">Ritah Manze</option>
                </select>
              </div>
              <div className=' col-md-12 mb-2'>
                  <label htmlFor='pubDate'>Published at</label>
                  <input type='date' name='pubDate' className='form-control'></input>
                </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BlogCreate
