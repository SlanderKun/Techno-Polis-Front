import './App.css'
import {observer} from "mobx-react-lite";
import {type FC} from "react";
import {Route, Routes} from "react-router-dom";
import PageLayout from "./shared/UI/PageLayout/PageLayout.tsx";
import ProfileDetailPage from "./pages/Profile/ProfileDetailPage/ProfileDetailPage.tsx";
import CatalogList from "./pages/Catalog/CatalogList/CatalogList.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import CatalogDetailPage from "./pages/Catalog/CatalogDetailPage/CatalogDetailPage.tsx";
import VacancyListPage from "./pages/Vacancy/VacancyListPage/VacancyListPage.tsx";
import VacancyDetailPage from "./pages/Vacancy/VacancyDetailPage/VacancyDetailPage.tsx";
import {useEffect} from "react";
import {store} from "./main.tsx";
import ProfileLoginPage from "./pages/Profile/ProfileLoginPage/ProfileLoginPage.tsx";

const App:FC = ()=>  {

    useEffect(() => {
        (async function (){
            if (localStorage.getItem('token')) {
                await store.AuthStore.checkAuth()
            }
        })()
    }, [])

    return (
        <div className={"appContainer"}>
            <Routes>
                <Route path='profile/' element={<PageLayout Component={store.AuthStore.isAuth ? ProfileDetailPage : ProfileLoginPage}/>} />

                <Route path='catalog/'>
                    <Route index={true} element={<PageLayout Component={CatalogList}/>} />
                    <Route path='vacancy/:id' element={<PageLayout Component={CatalogDetailPage}/>} />
                    <Route path='internship/:id' element={<PageLayout Component={CatalogDetailPage}/>} />
                </Route>
                <Route path='vacancy/'>
                    <Route index={true} element={<PageLayout Component={VacancyListPage}/>} />
                    <Route path=':id' element={<PageLayout Component={VacancyDetailPage}/>} />
                </Route>
                <Route path='internship/'>
                    <Route index={true} element={<PageLayout Component={VacancyListPage}/>} />
                    <Route path=':id' element={<PageLayout Component={VacancyDetailPage}/>} />
                </Route>
                <Route path="*" element={<PageLayout Component={HomePage}/>
                }/>
            </Routes>
        </div>
    )
}

export default observer(App)
