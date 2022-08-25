exports.validateEntries = (body) => {

    let errorResponse = {};
    errorResponse.message = "The following entries must not be empty"
    errorResponse.entries = [];

    const mainObj = body.boxPackingRequest.messageHeader;

    const keywordObject = {
        msgId: mainObj.msgId,
        sender: mainObj.sender,
        boxNumber: mainObj.boxData.boxNumber,
        plant: mainObj.senderInfo.plant,
        shippingPoint: mainObj.senderInfo.shippingPoint,
        soldToCode: mainObj.soldTo.soldToCode,
        shipToCode: mainObj.shipTo.shipToCode,
        intermediateCode: mainObj.intermediate.intermediateCode
    }

    Object.entries(keywordObject).forEach(([key, value]) => {
        if(!value || value === " ") {
            errorResponse.error = true;
            errorResponse.entries.push(key)
        }
    });

    return errorResponse
}