'use strict'

export const handleError = (error) => {
    console.log("CardanoBI - handleError, code:", error.code,
        ",name:", error.name,
        ",request:", error.request.host, error.request.method, error.request.path,
        ",response.status: ", error.response?.status,
        ",response.statusText: ", error.response?.statusText,
        ",response.data: ", error.response?.data);
}