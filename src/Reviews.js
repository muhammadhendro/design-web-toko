

import './App.css';

function Reviews(){

  // dummy JSON
  const users = [
    {
      "id": 1,
      "name": "Miyamoto",
      "review": "Harga murah kaki lima, kualitas bintang lima bukan kaleng-kaleng",
      "photo": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg"
    },
    {
      "id": 2,
      "name": "Soh Yong",
      "review": "Harga murah kaki lima, kualitas bintang lima bukan kaleng-kaleng",
      "photo": "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?cs=srgb&dl=pexels-ali-pazani-2787341.jpg&fm=jpg"

    },
    {
      "id": 3,
      "name": "Benneth",
      "review": "Harga murah kaki lima, kualitas bintang lima bukan kaleng-kaleng",
      "photo": "https://images.pexels.com/photos/7636769/pexels-photo-7636769.jpeg?cs=srgb&dl=pexels-misha-voguel-7636769.jpg&fm=jpg"
    }
  ];
  const listReview = users.map((user) =>
  <div key={user.id} className="Item"> 
  <img src={user.photo} alt="img" />
  <div className="User">
    <h3>{user.name}</h3>
    <p>{user.review}</p>
  </div>
</div>

  );
  return (
<div className="Review-box">
        <h2>Reviews</h2>
        {listReview}
      </div>
  );

}

export default Reviews;