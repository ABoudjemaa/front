import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ModulesPage = () => {
  const [modules, setModules] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated (token present)
    const token = localStorage.getItem("authToken");

    if (!token) {
      // Redirect to the login page if no token is found
      navigate("/");
      return;
    }

    // Fetch modules using the token
    // const fetchModules = async () => {
    //   try {
    //     const response = await fetch("http://127.0.0.1:8000/api/modules", {
    //       method: "GET",
    //       headers: {
    //         "Authorization": `Bearer ${token}`,
    //         "Content-Type": "application/json",
    //       },
    //     });

    //     if (!response.ok) {
    //       throw new Error("Failed to fetch modules");
    //     }

    //     const data = await response.json();
    //     setModules(data.modules); // Assuming the API returns a list of modules
    //   } catch (error: any) {
    //     console.error("Error fetching modules:", error);
    //   }
    // };

    // fetchModules();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Modules</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module, index) => (
          <Card key={index} className="p-4 bg-white shadow rounded-lg hover:shadow-md">
            <h2 className="text-xl font-semibold">{module}</h2>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ModulesPage;
