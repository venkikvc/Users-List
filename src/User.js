
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';



const UserDetails = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const decodedId = decodeURIComponent(id); // Decode the URL parameter

  const [ profile, setProfile ] = useState([])
  const [ loading, setLoading ] = useState([true])

  useEffect(() =>{
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

    .then(response => response.json())
    .then(data => {
      setProfile(data);
      setLoading(false);
    })
    
  },[id]);

  if (loading) {
    return (
      <div className="loading-container">
      <div className="loading-text">Loading...</div>
      </div>
    )
  }
  

  return (
    
    
    <div class="flex justify-center items-center mt-20">

      <div class="absolute left-10 top-5 h-32 w-32">
        <button onClick={() => navigate(-1)} >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>
      
      
      <div class="bg-white max-w-2xl shadow overflow-hidden sm-rounded-lg margin-auto width-auto">
        <div class="px-4 py-5 sm:px-6"> 
          <p class="text-lg leading-6 font-medium text-gray-900">Users database</p>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">Details and information about user</p>
        </div> 
        <div class="border-t border-gray-200"> 
          <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                Full Name
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {profile.name}
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    User ID
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {decodedId}
                </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                User Name
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {profile.username}
              </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    User Email
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {profile.email}
                </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">
                address:
              </dt>
              <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <p>{profile.address?.suite},{profile.address?.street}</p>
              <p>{profile.address?.city},Zip Code:{profile.address?.zipcode}</p>
              <p>Lat:{profile.address?.geo?.lat},Lng:{profile.address?.geo?.lng}</p>
              </dd>
            </div>
          </dl>
        </div> 
         
      </div>
    </div>
  );
}
export default UserDetails;
