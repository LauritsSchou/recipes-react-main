import { Route, Routes } from "react-router-dom";
import { Categories } from "./recipes/Categories";
import Recipe from "./recipes/Recipe";
import RecipeForm from "./recipes/RecipeForm";
import RecipesLayout from "./recipes/RecipesLayout";
import LogIn from "./security/Login";
import LogOut from "./security/LogOut";
import Layout from "./Layout";
import Home from "./Home";
import "./App.css";
import RequireAuth from "./security/RequireAuth";
import CategoryForm from "./recipes/CategoryForm";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/" element={<Categories />} />
        <Route path="/add-category" element={<RequireAuth roles={["ADMIN"]}><CategoryForm/></RequireAuth>} />
        <Route path="/recipes" element={<RecipesLayout />}>
          <Route path=":id" element={<Recipe />} />
        </Route>
        <Route
          path="/add"
          element={
            <RequireAuth roles={["USER", "ADMIN"]}>
              <RecipeForm />
            </RequireAuth>
          }
        />

        <Route path="/login" element={<LogIn />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </Layout>
  );
}
