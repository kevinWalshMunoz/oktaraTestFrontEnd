import React, {useState, useEffect} from 'react';
import './PackagesList.css';
import * as AiIcons from 'react-icons/ai';

function PackagesList() {

  const [packages, setPackages] = useState([])

  useEffect(() => {
    fetchPackages()
  }, [])


  const fetchPackages = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/packages', { mode: 'cors' });
      const data = await response.json();
      setPackages(data.data)
    }
    catch (e) {
      console.log('e')
    }
  }

  const editLocation = async () => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify()
      };
      const response = await fetch('http://localhost:3001/api/packages', requestOptions)
      const data = await response.json();
      //setPackages(data.data)
    }
    catch (e) {
      console.log('e')
    }
  }

  return (
    <div className="container">
        <ul className="product-list">
          {packages.map(packageBox => (
            <li key={packageBox._id}>
              <div className="product">
                <div className="product-image">
                  <img src={'https://i.imgur.com/uZn8GEP.png'} />
                </div>
                <div className="product-imformation">
                  <h4>{packageBox.description}</h4>
                  <div className="specification">
                    <span>Status: {packageBox.status}</span>
                    <small className="line"></small>
                    <span>Owner: {packageBox.owner}</span>
                  </div>
                  <span>Warehouse location: {packageBox.storageLocation} <button onClick={() => alert("Settings page")}><AiIcons.AiFillEdit /></button></span>
                </div>
              </div>
            </li>
          ))
          }
        </ul>
    </div>
  );
}

export default PackagesList;