import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const AddJobs = () => {
  const navigate = useNavigate();
  const axios = useAxiosSecure();
  const { user } = useAuth();
  const handleAddJob = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form?.name?.value;
    const jobTitle = form.jobTitle.value;
    const deadline = form?.deadline?.value;
    const description = form?.description?.value;
    const category = form?.category?.value;
    const minimumPrice = form?.minimumPrice?.value;
    const maximumPrice = form?.maximumPrice?.value;
    const jobInfo = {
      name,
      email: user?.email,
      jobTitle,
      deadline,
      description,
      category,
      minimumPrice: parseInt(minimumPrice),
      maximumPrice: parseInt(maximumPrice),
      photoUrl: user?.photoUrl,
    };

    axios
      .post('/jobs', jobInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data.acknowledged) {
          Swal.fire({
            title: 'Success!',
            text: 'Product Successfully Added',
            icon: 'success',
            confirmButtonText: 'Ok',
          });
          navigate(`/my-posted-jobs/${user?.email}`);
        }
      })
      .then((error) => {
        if (error) {
          Swal.fire({
            title: 'Error!!',
            text: 'Something Went Wrong!!!',
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        }
      });
  };
  return (
    <div>
      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 bg-gray-100 container mx-auto rounded-lg ">
        <div className="container mx-auto">
          <p className="text-4xl text-center font-bold mb-16">Add Your Job</p>
          <form onSubmit={handleAddJob} className="-mx-4 flex flex-wrap px-6">
            <div className="w-full px-4 md:w-1/2 lg:w-1/2">
              <div className="mb-12">
                <label className="mb-3 block text-base font-medium text-black ">
                  Your Name
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Please Enter Product Name Here..."
                  className="w-full rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/2">
              <div className="mb-12">
                <label className="mb-3 block text-base font-medium text-black ">
                  Job Title
                </label>
                <input
                  required
                  name="jobTitle"
                  type="text"
                  placeholder="Please Enter Job Title"
                  className="w-full rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/2">
              <div className="mb-12">
                <label className="mb-3 block text-base font-medium text-black ">
                  Dead Line
                </label>
                <input
                  required
                  name="deadline"
                  type="date"
                  placeholder="Please Enter Product Price here.."
                  className="w-full rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/2">
              <div className="mb-12">
                <label className="mb-3 block text-base font-medium text-black ">
                  Minimum Price
                </label>
                <input
                  required
                  name="minimumPrice"
                  type="number"
                  placeholder="Enter Minimum Price"
                  className="w-full rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/2">
              <div className="mb-12">
                <label className="mb-3 block text-base font-medium text-black ">
                  Maximum Price
                </label>
                <input
                  required
                  name="maximumPrice"
                  type="number"
                  placeholder="Your Maximum Price"
                  className="w-full rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/2">
              <div className="mb-12">
                <label className="mb-3 block text-base font-medium text-black ">
                  Category
                </label>
                <select
                  className="w-full rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                  name="category"
                  id="category"
                >
                  <option value="web-development">Web Development</option>
                  <option value="graphics-design">Graphics Design</option>
                  <option value="digital-marketing">Digital Marketing</option>
                </select>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/1 lg:w-1/1">
              <div className="mb-12">
                <label className="mb-3 block text-base font-medium text-black ">
                  Description
                </label>
                <textarea
                  name="description"
                  type="text"
                  placeholder="Enter Short Description Here.."
                  className="w-full rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
              </div>
            </div>

            <div className=" mx-auto px-4 w-4/5 md:w-2/3 lg:w-2/3 ">
              <div className="mb-12">
                <input
                  required
                  type="submit"
                  className="w-full  cursor-pointer hover:bg-slate-400 bg-slate-300 rounded-lg border-[1.5px] border-form-stroke py-3 px-5 font-medium text-body-color placeholder-body-color outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
export default AddJobs;
