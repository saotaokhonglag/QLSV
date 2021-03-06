import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomePage from "../screens/students/HomePage";
import Wallet from "../screens/students/Wallet";
import Historys from "../screens/students/Historys";
import Profile from "../screens/students/profile";
import EditProfile from "../screens/students/EditProfile";
import addOrder from "../screens/students/AddOrder";
import Login from "../screens/Start/Login";
import EditPd from "../screens/students/EditPd";
import DetailOrder from "../screens/students/DetailOrder";
import StartScreen from "../screens/Start/StartScreen";
import CreateProfile from "../screens/Start/CreateProfile";
import LogoutModal from "../components/Modals/LogoutModal";
import HomePageSeller from "../screens/sellers/HomePage";
import Product from "../screens/sellers/Product";
import Directory from "../screens/sellers/Directory";
import Chart from "../screens/sellers/Chart";
import Order from "../screens/sellers/Order";
import CatalogDetails from "../screens/sellers/CatalogDetails";
import CreateProduct from "../screens/sellers/CreateProduct";
import DetailsOrder from "../screens/sellers/DetailsOrder";
import CreateAdd from "../screens/sellers/CreateAdd";
import EditProduct from "../screens/sellers/EditProduct";
import NVQL from "../screens/admin/AddNVQL";
import AdminPage from "../screens/admin/AdminPage";
import DSQL from "../screens/admin/DSQL";
import DSQLSV from "../screens/admin/QLSV";
import Services from "../screens/admin/Services";
import UpdateManangeritem from "../screens/admin/UpdateMananger";
import CheckOut from "../screens/students/CheckOut";
import AddMoneyDetail from "../screens/students/AddMoneyDetail";
import DirectoryDetail from "../screens/students/DirectoryDetail";
import { theme } from "../contants/theme";
import { Provider } from "react-native-paper";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={"red"} size={20} />
          ),
          tabBarColor: "green",
          tabBarLabel: "Trang ch???",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Th??ng tin C?? Nh??n",
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#2F85F8" },
          headerTitleAlign: "center",
          headerTintColor: "#FFFFFF",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="smart-card" color={"red"} size={20} />
          ),
          tabBarColor: "#d02860",
          tabBarLabel: "C?? nh??n",
        }}
      />
    </Tab.Navigator>
  );
}
const TabTop = createMaterialTopTabNavigator();
function MyTabsTop() {
  return (
    <TabTop.Navigator>
      <TabTop.Screen
        name="Products"
        component={Product}
        options={{ title: "S???n ph???m" }}
      />
      <TabTop.Screen
        name="Directory"
        component={Directory}
        options={{ title: "Danh m???c" }}
      />
    </TabTop.Navigator>
  );
}
const Stack = createNativeStackNavigator();

function index() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerStyle: { backgroundColor: "#2F85F8" },
            headerTitleAlign: "center",
            headerTintColor: "#FFFFFF",
          }}
        >
          <Stack.Screen
            name="StartScreen"
            component={StartScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LogoutModal"
            component={LogoutModal}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreateProfile"
            component={CreateProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomePage"
            component={MyTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddOrder"
            component={addOrder}
            options={{ title: "T???o H??a ????n" }}
          />
          <Stack.Screen
            name="EditPd"
            component={EditPd}
            options={{ title: "S???a s???n ph???m" }}
          />
          <Stack.Screen
            name="DetailOrder"
            component={DetailOrder}
            options={{
              headerStyle: { backgroundColor: "#FFFF" },
              headerTitleAlign: "center",
              headerTintColor: "#333",
              title: "X??c nh???n h??a ????n",
            }}
          />
          <Stack.Screen
            name="CheckOut"
            component={CheckOut}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ title: "Th??ng tin c?? nh??n" }}
          />
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{
              title: "Ch???nh s???a th??ng tin c?? nh??n",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="Wallet"
            component={Wallet}
            options={{
              title: "V??",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="Historys"
            component={Historys}
            options={{
              title: "L???ch s??? giao d???ch",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="HomePageSeller"
            component={HomePageSeller}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Product"
            component={MyTabsTop}
            options={{ title: "Qu???n l??" }}
          />
          <Stack.Screen
            name="Order"
            component={Order}
            options={{ title: "Qu???n l?? ????n h??ng" }}
          />
          <Stack.Screen
            name="Chart"
            component={Chart}
            options={{ title: "B??o c??o thu nh???p" }}
          />
          <Stack.Screen
            name="CatalogDetails"
            component={CatalogDetails}
            options={{ title: "Chi ti???t danh m???c" }}
          />
          <Stack.Screen
            name="AddMoneyDetail"
            component={AddMoneyDetail}
            options={{ title: "Chi ti???t giao d???ch" }}
          />
          <Stack.Screen
            name="DirectoryDetail"
            component={DirectoryDetail}
            options={{ title: "Chi ti???t giao d???ch" }}
          />
          <Stack.Screen
            name="EditProduct"
            component={EditProduct}
            options={{ title: "C???p nh???t s???n ph???m" }}
          />
          <Stack.Screen
            name="CreateProduct"
            component={CreateProduct}
            options={{ title: "T???o s???n ph???m" }}
          />
          <Stack.Screen
            name="DetailsOrder"
            component={DetailsOrder}
            options={{ title: "Chi ti???t ????n h??ng" }}
            backBehavior="firstRoute"
          />
          <Stack.Screen
            name="CreateAdd"
            component={CreateAdd}
            options={{ title: "T???o nh???p h??ng" }}
          />
          <Stack.Screen
            name="NVQL"
            component={NVQL}
            options={{ title: "Th??m NVQL" }}
          />
          <Stack.Screen
            name="UpdateMananger"
            component={UpdateManangeritem}
            options={{ title: "C???p nh???t nh??n vi??n" }}
          />
          <Stack.Screen
            name="AdminPage"
            component={AdminPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DSQL"
            component={DSQL}
            options={{ title: "Nh??n vi??n qu???n l??" }}
          />
          <Stack.Screen
            name="DSQLSV"
            component={DSQLSV}
            options={{ title: "Danh s??ch sinh vi??n" }}
          />
          <Stack.Screen
            name="Services"
            component={Services}
            options={{ title: "D???ch v???" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default index;
