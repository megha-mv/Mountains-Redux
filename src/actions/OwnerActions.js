import { Owner_Page } from "../services/Constants"
import {Tenant_Page} from "../services/Constants"

export const ownerAction = ()=>{
    return{
        type:Owner_Page,
        data:data
    }
}

export const tenantAction = ()=>{
    return{
        type:Tenant_Page,
        data:data
    }
}