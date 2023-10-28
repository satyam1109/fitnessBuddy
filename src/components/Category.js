import React, { useEffect, useState, Link } from "react";
import { useParams } from "react-router-dom";
import "./food.css"

export default function Category() {
  const { name } = useParams();
  const [foodinfo, setfoodinfo] = useState([]);
  const [fetched,setfetched]=useState(true);

  let title, content, action;

  if (name === "protein") {
    title = "Protein Information";
    content =
      "Protein helps repair and build your body’s tissues. It drives metabolic reactions, maintains pH and fluid balance, and keeps the immune system strong. Many hormones, including insulin and growth hormone, are proteins that regulate various bodily processes. It also transports and stores nutrients and can act as an energy source.Proteins do most of their work in the cell and perform various jobs";
    action =
      "Growth and Maintainence of Muscles, Act as Messenger, Tissue Building, , Hormone Production, Transports and Stores Nutritions, Provides Energy";
  }

  if (name === "Carbohydrates") {
    title = "Carbohydrates Information";
    content =
      "Carbohydrates are a critical macronutrient, serving as the body's primary energy source, with glucose derived from carbs being essential for brain and nervous system function. They also play a key role in metabolic processes, including nucleic acid synthesis and fat metabolism. Consuming carbs spares protein for tissue repair and enzyme production, aids in sports performance, helps control blood sugar, and is integral to a balanced diet, making it essential for overall health and well-being";
    action =
      "Energy Source, Metabolic Function, Dietary Fibre, Sparing Protein. Appetite Regulation, Sports Performance, Blood Sugar Control";
  }

  if (name === "fats") {
    title = "Fats Information";
    content =
      "Fats, or lipids, are crucial macronutrients with multifaceted roles in the human body. They serve as an efficient energy source, provide structural components for cell membranes, regulate temperature, protect vital organs, aid in the absorption of fat-soluble vitamins, contribute to hormone production, support brain health, and enhance the flavor and satiety of foods";
    action =
      "Energy Storage and Supply, Cell Membranes, Temprature Regulation, Protection of Organs, Transport Of Fats Soluble Vitamins, Hormone Production";
  }

  if (name === "fibres") {
    title = "Fibres Information";
    content =
      "Fibres supports digestive health by preventing constipation and nurturing a balanced gut microbiome. Fiber aids in weight management by promoting feelings of fullness and appetite control. It plays a role in stabilizing blood sugar levels, which is important for individuals with diabetes, and can reduce the risk of heart disease.";
    action =
      "Digestive Health, Gut Health, Weight Management, Blood Sugar Control, Heart Health, Apetite Control, Skin Health";
  }

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://food-api-6g9p.onrender.com/${name}`;

      try {
        const response = await fetch(url);
        const respjson = await response.json();

        // setfoodinfo(respjson);

        console.log(respjson);
        setfoodinfo(respjson);
        setfetched(false);
      } catch (e) {
        console.log("error occured ", e);
      }
    };

    fetchApi();
  }, [name]);

  return (
    <div>
      <div className="description">
        <u>
          <span
            className="item-name py-2"
            style={{ color: "rgb(79, 86, 183)" }}
          >
            {title}
          </span>
        </u>
        <i>
          <b>
            <p>{content}</p>
          </b>
        </i>

        <span className="benifits" style={{ color: "rgb(79, 86, 183)" }}>
          {action}
        </span>
      </div>

      <h1 className="my-5">
        High{" "}
        <span className="item-name" style={{ color: "rgb(79, 86, 183)" }}>
          {name}
        </span>{" "}
        foods
      </h1>

      {fetched ? (
        <div class="spinner-border text-primary" role="status">
        <span class="sr-only"></span>
      </div>
      ) : (
        <div className="row">
          {foodinfo.map((item) => (
            // <h1 key={item.id}>{item.name}</h1>
            <div className="card col-lg-3 col-md-6 col-sm-12 mb-3 food-item">
              <div>
                <img
                  src={item.imageurl}
                  className="card-img-top custom-card-image"
                  alt={item.name}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title item-name">{item.name}</h5>
                <div className="row">
                  <div className="col-lg-6 nutrition">
                    <h3 className="nutrition-txt ">
                      Protein :{" "}
                      <span style={{ color: "rgb(79, 86, 183)" }}>
                        {item.nutrition.protein}gm
                      </span>
                    </h3>
                    <h3 className="nutrition-txt">
                      Carbs :{" "}
                      <span style={{ color: "rgb(79, 86, 183)" }}>
                        {item.nutrition.carbohydrates}gm
                      </span>
                    </h3>
                    <h3 className="nutrition-txt">
                      Fats :{" "}
                      <span style={{ color: "rgb(79, 86, 183)" }}>
                        {item.nutrition.fats}gm
                      </span>
                    </h3>
                    <h3 className="nutrition-txt">
                      Fibres :{" "}
                      <span style={{ color: "rgb(79, 86, 183)" }}>
                        {item.nutrition.fibres}gm
                      </span>
                    </h3>
                  </div>
                  <div className="col-lg-3 mt-2">
                    <a href={item.link} target="_blank">
                      <button className="btn btn-primary mt-lg-5 mx-lg-4">
                        More information
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
