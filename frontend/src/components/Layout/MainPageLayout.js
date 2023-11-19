const { default: Sidebar } = require("components/Sidebar")
const { Outlet } = require("react-router-dom")


const MainPageLayout = () => {
    return (
        <>
            <Sidebar>
                <Outlet />
            </Sidebar>
        </>
    )
}

export default MainPageLayout;