import { Dashboard } from "../components/dashboard/Dashboard";
import { Navbar } from "../components/navbar/Navbar";
import { Sidebar } from "../components/sidebar/Sidebar";
import { DashboardProvider } from "../contexts/dashboard";


export function Landing() {
    // return <Dashboard />
    return (
        <div className="h-screen grid sm:grid-cols-12 grid-cols-10">
            <div className="border col-span-1 overflow-auto">
                <Sidebar/>
            </div>
            <div className="max-h-screen col-span-9 sm:col-span-11 grid sm:grid-rows-10 grid-rows-8">
                <DashboardProvider>
                    <div className="row-span-1 border-b border-slate-200 shadow-sm">
                        <Navbar />
                    </div>
                    <div 
                    style={{
                        scrollbarWidth: 'thin'
                    }}
                    className="max-h-min border row-span-7 sm:row-span-9 overflow-auto p-2">
                        <Dashboard />
                    </div>
                </DashboardProvider>
            </div>
        </div>
    )
}