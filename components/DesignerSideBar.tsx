import React from 'react'
import FormElementsSideBar from './FormElementsSideBar'
import PropertiesFormSideBar from './PropertiesFormSideBar'
import useDesigner from './hooks/useDesigner'
function DesignerSideBar() {
  const {selectedElement} = useDesigner();
  return (
    <aside className="w-[400px] max-w-[400px] flex flex-col 
    flex-grow gap-2 border-l-2 border-muted p-4 bg-background 
    overflow-y-auto h-full">
     {!selectedElement && <FormElementsSideBar/>}
     {selectedElement && <PropertiesFormSideBar/>}
    </aside>
  )
}

export default DesignerSideBar;
