const ResCard = (props) => {
  const {resData} = props;
return (
<div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
  <img  className="rounded-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}/>
  <h2 className="py-4 text-lg font-bold">{resData.info.name}</h2>
  <h4>{resData.info.cuisines.join(", ")}</h4>
  <h4>{resData.info.avgRating} Stars</h4>
  <h4>Area-{resData.info.areaName}</h4>
  <h4>{resData.info.costForTwo}</h4>
  </div>
); 
};

export default ResCard;