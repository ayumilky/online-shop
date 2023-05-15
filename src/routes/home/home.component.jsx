import Directory from "../../components/directory/directory.component";
function Home() {
  const categories = [
    {
      id: 1,
      title: "Womens",
      imageUrl:
        "https://images.unsplash.com/photo-1450297756549-a553121ddff2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 2,
      title: "Mens",
      imageUrl:
        "https://images.unsplash.com/photo-1553143820-6bb68bc34679?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=748&q=80",
    },
    {
      id: 3,
      title: "Accessories",
      imageUrl:
        "https://images.unsplash.com/photo-1537832816519-689ad163238b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1718&q=80",
    },
    {
      id: 4,
      title: "Shoes",
      imageUrl:
        "https://images.unsplash.com/photo-1589562481113-10555af3f69d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      id: 5,
      title: "Kids",
      imageUrl:
        "https://images.unsplash.com/photo-1604467794349-0b74285de7e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
  ];

  return <Directory categories={categories} />;
}

export default Home;
