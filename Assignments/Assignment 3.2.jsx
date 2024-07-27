import ReactDOM from "react-dom";
const Header = () => {
   return (
      <nav
         style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
         }}
      >
         <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img
               style={{ width: 30 }}
               src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
            />
            <span style={{ fontWeight: "bold", fontSize: 20 }}>Twitter</span>
         </div>
         <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <input
               placeholder="Enter text to search"
               style={{
                  outline: "none",
                  border: 0,
                  borderBottom: "1px solid #dfdfdf",
                  padding: 3,
                  width: 300,
                  fontSize: 14,
               }}
               type="search"
            />
         </div>
         <img
            src="https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"
            style={{ width: 30, borderRadius: 20 }}
         />
      </nav>
   );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
