import DirectoryItem from "../directory-item/directory-item.component";
import DirectoryPhoto1 from "../../assets/img/DirectoryPhoto1.gif";
import DirectoryPhoto2 from "../../assets/img/DirectoryPhoto2.jpeg";
import DirectoryPhoto3 from "../../assets/img/DirectoryPhoto3.jpeg";
import DirectoryPhoto4 from "../../assets/img/DirectoryPhoto4.jpeg";
import DirectoryPhoto5 from "../../assets/img/DirectoryPhoto5.jpeg";
import "./directory.styles.scss";

const categories = [
  {
    id: 1,
    title: "Collections",
    imageUrl: DirectoryPhoto1,
    route: "shop/dinnerware/1",
  },
  {
    id: 2,
    title: "Drinkware",
    imageUrl: DirectoryPhoto2,
    route: "shop/drinkware",
  },
  {
    id: 3,
    title: "Serveware",
    imageUrl: DirectoryPhoto3,
    route: "shop/serveware",
  },
  {
    id: 4,
    title: "Dinnerware",
    imageUrl: DirectoryPhoto4,
    route: "shop/dinnerware",
  },
  {
    id: 5,
    title: "Bakeware",
    imageUrl: DirectoryPhoto5,
    route: "shop/bakeware",
  },
];

const Directory = () => {
  return (
    <div className="wrapper">
      <div className="directory-container">
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Directory;
