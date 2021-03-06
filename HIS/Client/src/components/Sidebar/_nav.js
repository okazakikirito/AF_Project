export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "icon-speedometer",
      badge: {
        variant: "info"
      }
    },
    {
      title: true,
      name: "Main Navigation",
      wrapper: {
        // optional wrapper object
        element: "", // required valid HTML5 element tag
        attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: "" // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: "Ward Admision",
      url: "/patientList/patientView",
      icon: "icon-drop"
    },
    
    
    {
      name: "New Admision",
      url: "/newAddmission",
      icon: "icon-drop"
    },
     
  
    {
      name: "Search Patient By BHT",
      url: "/search",
      icon: "icon-drop"
    },
    {
      name: "Bed Management",
      url: "/theme/colors",
      icon: "icon-drop"
    },
    {
      name: "My Wards",
      url: "/theme/colors",
      icon: "icon-drop"
    },
    {
      name: "Patient Archive Details",
      url: "/theme/colors",
      icon: "icon-drop"
    },
    {
      title: true,
      name: "Components",
      wrapper: {
        element: "",
        attributes: {}
      }
    },


    {
      name: "Pages",
      url: "/pages",
      icon: "icon-star",
      children: [
        {
          name: "Login",
          url: "/login",
          icon: "icon-star"
        },
        {
          name: "Register",
          url: "/register",
          icon: "icon-star"

        }
      ]
    }
  ]
};
