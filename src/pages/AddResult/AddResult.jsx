import Swal from 'sweetalert2';
import './AddRsult.css'

const AddResult = () => {
  const addSubmitResult = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const role = form.Role.value;
    const classId = parseInt(form.number.value);
    const year = form.year.value;
    const section = parseInt(form.section.value);
    const midTerm = {
      Bangla: parseInt(form.Bangla.value),
      Biology: parseInt(form.Biology.value),
      Chemistry: parseInt(form.Chemistry.value),
      English: parseInt(form.English.value),
      Math: parseInt(form.Math.value),
      Physics: parseInt(form.Physics.value),
    };
  
    const finalTerm = {
      Bangla: parseInt(form.fBangla.value),
      Biology: parseInt(form.fBiology.value),
      Chemistry: parseInt(form.fChemistry.value),
      English: parseInt(form.fEnglish.value),
      Math: parseInt(form.fMath.value),
      Physics: parseInt(form.fPhysics.value),
    };
    const resultData = {
      Name: name,
      role: role,
      classId: classId,
      year: year,
      section: section,
      midTerm: midTerm,
      finalTerm: finalTerm,
    };
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, submit it!'
    }).then((result) => {
      if (result.isConfirmed){
          fetch(`http://localhost:5000/allResults`,{
            method: "POST",
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(resultData)
        }).then(res => res.json())
        .then(data => {
          console.log(data)
          Swal.fire(
            'Submitted!',
            'Your data has been submitted successfully.',
            'success'
          );
           form.reset();
        })
        .catch(error => {
          console.error(error);
          Swal.fire(
            'Error!',
            'An error occurred while submitting the data.',
            'error'
          );
        });
      }
    })
  };
  
  return (
    <>
       <div className="p-10 ">
           <div className="">
                 <h1 className='text-2xl bg-green-100 text-center py-2 shadow-lg my-10 rounded'> Add Result on your midTrim and finalTrim</h1>
               <div className="bg-green-100 p-10 shadow-lg rounded">
                    <form onSubmit={addSubmitResult}>
                    <div className="userItem w-[90%] mx-auto grid lg:grid-cols-5 gap-5 my-10">
                       <input type="text" name="name" id="name"  placeholder='Name'/>
                        <input type="number" name="number" id="number" placeholder='classId'/>
                        <select name="Role" id="Role">
                          <option value="" disabled selected>role</option>
                          <option value="student">student </option>
                          <option value="student">teacher</option>
                        </select>
                        <select name="section" id="section">
                          <option value="" disabled selected>section</option>
                          <option value="10">10</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                        </select>
                        <select name="year" id="year">
                          <option value="" disabled selected>Year</option>
                          <option value="2020">2020</option>
                          <option value="2021">2021</option>
                          <option value="2021">2022</option>
                          <option value="2021">2023</option>
                        </select>
                       </div>
                      <div>
                          <div className="lg:flex w-[90%] mx-auto resultData">
                            <div className="midTrim py-[40px]">   
                                <h1 className='text-center text-2xl'>midTrim</h1> 
                                <hr className='border w-[100px] border-green-400 mx-auto mb-5'/>
                             <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 ">
                              <input type="number" name="Bangla" id="Bangla" placeholder='Bangla'/>
                              <input type="number" name="Biology" id="Biology" placeholder='Biology' />
                              <input type="number" name="Chemistry" id="Chemistry" placeholder='Chemistry'/>
                              <input type="number" name="English" id="English" placeholder='English'/>
                              <input type="number" name="Math" id="Math"  placeholder='Math'/>
                              <input type="number" name="Physics" id="Physics" placeholder='Physics'/>
                              </div>
                         </div>
                            <div className="divider divider-horizontal">OR</div>
                             <div className="finalTrim py-[40px]">
                            <h1 className='text-center text-2xl'>finalTrim</h1>
                            <hr className='border w-[100px] border-green-400 mx-auto mb-5'/>
                              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                              <input type="number" name="fBangla" id="fBangla" placeholder='Bangla'/>
                              <input type="number" name="fBiology" id="fBiology" placeholder='Biology' />
                              <input type="number" name="fChemistry" id="fChemistry" placeholder='Chemistry'/>
                              <input type="number" name="fEnglish" id="fEnglish" placeholder='English'/>
                              <input type="number" name="fMath" id="fMath"  placeholder='Math'/>
                              <input type="number" name="fPhysics" id="fPhysics" placeholder='Physics'/>
                              </div>
                            </div>
                           </div>
                         </div>
                       <div className="mx-auto flex justify-center my-10">
                       <button className="btn btn-outline btn-success">Save..</button>

                       </div>
                    </form>
               </div>
           </div>
       </div>
    </>
  );
};

export default AddResult;