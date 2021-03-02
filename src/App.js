import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import View from "@vkontakte/vkui/dist/components/View/View";
import ScreenSpinner from "@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner";
import "@vkontakte/vkui/dist/vkui.css";
import { transport } from "./constants/config";
import Home from "./panels/Home";
import { UserContext } from "./context/UserContext";

const App = () => {
  const [activePanel, setActivePanel] = useState("home");
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);

  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === "VKWebAppUpdateConfig") {
        const schemeAttribute = document.createAttribute("scheme");
        schemeAttribute.value = data.scheme ? data.scheme : "client_light";
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
      setUser(user);
      setPopout(null);
    }
    fetchData().then((r) => r);
  }, []);

  const go = (e) => {
    setActivePanel(e.currentTarget.dataset.to);
  };
  return (
    <UserContext.Provider
      value={{
        fetchedUser,
        transport,
      }}
    >
      <View activePanel={activePanel} popout={popout}>
        <Home id="home" fetchedUser={fetchedUser} go={go} />
      </View>
    </UserContext.Provider>
  );
};

export default App;
