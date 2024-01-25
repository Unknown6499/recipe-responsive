import "./App.css";
import omlette from "./assets/image-omelette.jpeg";
function App() {
  return (
    <>
      {/* main  */}
      <div className="main">
        {/* content container */}
        <div className="container">
          <img src={omlette} className="omlette" alt="omelette" />
          {/* Recipe intro */}
          <div className="intro">
            <h1>Simple Omelette Recipe</h1>
            <p>
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables or meats.
            </p>
          </div>
          {/* preprations to be made */}
          <div className="preparation">
            <p>Preparation Time</p>
            <ul>
              <li>
                <p>
                  <strong>Total:</strong>
                  Approximately 10 minutes
                </p>
              </li>
              <li>
                <p>
                  <strong>Preparation:</strong> 5 minutes
                </p>
              </li>
              <li>
                <p>
                  <strong>Cooking:</strong> 5 minutes
                </p>
              </li>
            </ul>
          </div>
          {/* ingredients to be used */}
          <div className="ingredients">
            <h1>Ingredients</h1>
            <ul>
              <li>2-3 large eggs</li>
              <li>Salt, to taste</li>
              <li>Pepper, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>
                Optional fillings: cheese, diced vegetables, cooked meat, herbs
              </li>
            </ul>
          </div>
          <hr />
          {/* instuctions for how to make */}
          <div className="instructions">
            <h1>Instructions</h1>
            <ol>
              <li>
                <strong>Beat the eggs:</strong> In a bowl, beat the eggs with a
                pinch of salt and pepper until they are will mixed. You can add
                a tablespoon of water or milk for a fluffier texture.
              </li>
              <li>
                <strong>Heat the pan:</strong>Place a non-stick frying pan over
                medium heat and add butter or oil.
              </li>
              <li>
                <strong>Cook the Omelette:</strong>Once the butter is melted and
                bubbling,pour in the eggs. Tilt the pan to ensure the eggs
                evenly coats the surface.
              </li>
              <li>
                <strong>Add fillings(optional):</strong>When the eggs begin to
                set at the edges but are still slightly runny in the middle,
                sprinkle your chosen fillings over one half of the omelette.
              </li>
              <li>
                <strong>Fold and serve:</strong>As the omelette continues to
                cook, carefully lift one edge and fold it over the fillings. Let
                it cook for another minute, then slide it onto a plate.
              </li>
              <li>
                <strong>Enjoy:</strong>Serve hot, with additional salt and
                pepper if needed.
              </li>
            </ol>
          </div>
          <hr />
          {/* nutritional values */}
          <div className="nutrition">
            <h1>Nutrition</h1>
            The table below show nutritional values per serving without the
            additional fillings.
            {/* table for nutritional values */}
            <table className="table">
              <tr className="borderBottom">
                <td className="left">Calories</td>
                <td className="right">277kcal</td>
              </tr>
              <tr className="borderBottom">
                <td>Carbs</td>
                <td className="right">0g</td>
              </tr>
              <tr className="borderBottom">
                <td>Protein</td>
                <td className="right">20g</td>
              </tr>
              <tr className="borderBottom">
                <td>Fat</td>
                <td className="right">22g</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
