var wms_layers = [];

var format_CCWDeclineforreviewentities_0 = new ol.format.GeoJSON();
var features_CCWDeclineforreviewentities_0 = format_CCWDeclineforreviewentities_0.readFeatures(json_CCWDeclineforreviewentities_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCWDeclineforreviewentities_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCWDeclineforreviewentities_0.addFeatures(features_CCWDeclineforreviewentities_0);
var lyr_CCWDeclineforreviewentities_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CCWDeclineforreviewentities_0, 
                style: style_CCWDeclineforreviewentities_0,
                interactive: true,
    title: 'CCW Decline for review entities<br />\
    <img src="styles/legend/CCWDeclineforreviewentities_0_0.png" /> -180<br />\
    <img src="styles/legend/CCWDeclineforreviewentities_0_1.png" /> Decline<br />\
    <img src="styles/legend/CCWDeclineforreviewentities_0_2.png" /> FAR<br />\
    <img src="styles/legend/CCWDeclineforreviewentities_0_3.png" /> Lateral Ore<br />\
    <img src="styles/legend/CCWDeclineforreviewentities_0_4.png" /> Lateral Waste<br />\
    <img src="styles/legend/CCWDeclineforreviewentities_0_5.png" /> <br />'
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ccwdecline_2 = new ol.format.GeoJSON();
var features_ccwdecline_2 = format_ccwdecline_2.readFeatures(json_ccwdecline_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ccwdecline_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ccwdecline_2.addFeatures(features_ccwdecline_2);
var lyr_ccwdecline_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ccwdecline_2, 
                style: style_ccwdecline_2,
                interactive: true,
    title: 'ccw decline<br />\
    <img src="styles/legend/ccwdecline_2_0.png" /> -180<br />\
    <img src="styles/legend/ccwdecline_2_1.png" /> Decline<br />\
    <img src="styles/legend/ccwdecline_2_2.png" /> FAR<br />\
    <img src="styles/legend/ccwdecline_2_3.png" /> Lateral Ore<br />\
    <img src="styles/legend/ccwdecline_2_4.png" /> Lateral Waste<br />\
    <img src="styles/legend/ccwdecline_2_5.png" /> <br />'
        });
var format_CCW_claimsAug292019_3 = new ol.format.GeoJSON();
var features_CCW_claimsAug292019_3 = format_CCW_claimsAug292019_3.readFeatures(json_CCW_claimsAug292019_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CCW_claimsAug292019_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CCW_claimsAug292019_3.addFeatures(features_CCW_claimsAug292019_3);
var lyr_CCW_claimsAug292019_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CCW_claimsAug292019_3, 
                style: style_CCW_claimsAug292019_3,
                interactive: true,
                title: '<img src="styles/legend/CCW_claimsAug292019_3.png" /> CCW_claimsAug29-2019'
            });
var format_CSR_leases_Castle_4 = new ol.format.GeoJSON();
var features_CSR_leases_Castle_4 = format_CSR_leases_Castle_4.readFeatures(json_CSR_leases_Castle_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CSR_leases_Castle_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CSR_leases_Castle_4.addFeatures(features_CSR_leases_Castle_4);
var lyr_CSR_leases_Castle_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CSR_leases_Castle_4, 
                style: style_CSR_leases_Castle_4,
                interactive: true,
                title: '<img src="styles/legend/CSR_leases_Castle_4.png" /> CSR_leases_Castle'
            });
var format_Dissolved_5 = new ol.format.GeoJSON();
var features_Dissolved_5 = format_Dissolved_5.readFeatures(json_Dissolved_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dissolved_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dissolved_5.addFeatures(features_Dissolved_5);
var lyr_Dissolved_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dissolved_5, 
                style: style_Dissolved_5,
                interactive: true,
                title: '<img src="styles/legend/Dissolved_5.png" /> Dissolved'
            });
var format_monwells_6 = new ol.format.GeoJSON();
var features_monwells_6 = format_monwells_6.readFeatures(json_monwells_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_monwells_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_monwells_6.addFeatures(features_monwells_6);
var lyr_monwells_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_monwells_6, 
                style: style_monwells_6,
                interactive: true,
                title: '<img src="styles/legend/monwells_6.png" /> monwells'
            });
var group_CCWDeclineforreview = new ol.layer.Group({
                                layers: [lyr_CCWDeclineforreviewentities_0,],
                                title: "CCW Decline for review"});

lyr_CCWDeclineforreviewentities_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_ccwdecline_2.setVisible(true);lyr_CCW_claimsAug292019_3.setVisible(true);lyr_CSR_leases_Castle_4.setVisible(true);lyr_Dissolved_5.setVisible(true);lyr_monwells_6.setVisible(true);
var layersList = [group_CCWDeclineforreview,lyr_GoogleSatellite_1,lyr_ccwdecline_2,lyr_CCW_claimsAug292019_3,lyr_CSR_leases_Castle_4,lyr_Dissolved_5,lyr_monwells_6];
lyr_CCWDeclineforreviewentities_0.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_ccwdecline_2.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_CCW_claimsAug292019_3.set('fieldAliases', {'Legacy_Claim_Id': 'Legacy_Claim_Id', 'Township___Area': 'Township___Area', 'Tenure_ID': 'Tenure_ID', 'Tenure_Type': 'Tenure_Type', 'Anniversary_Date': 'Anniversary_Date', 'Tenure_Status': 'Tenure_Status', 'Tenure_Percentage': 'Tenure_Percentage', 'Work_Required': 'Work_Required', 'Work_Applied': 'Work_Applied', 'Available_Consultation_Reserve': 'Available_Consultation_Reserve', 'Available_Exploration_Reserve': 'Available_Exploration_Reserve', 'Total_Reserve': 'Total_Reserve', 'Conversion_Bank_Credit': 'Conversion_Bank_Credit', 'Tenure_num': 'Tenure_num', 'Title_type': 'Title_type', 'Title_ty_1': 'Title_ty_1', 'Tenure_sta': 'Tenure_sta', 'Tenure_s_1': 'Tenure_s_1', 'Issue_date': 'Issue_date', 'Anniversar': 'Anniversar', 'Extension_': 'Extension_', 'Holder': 'Holder', });
lyr_CSR_leases_Castle_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DISPPLY_ID': 'DISPPLY_ID', 'SYSTEM_ID': 'SYSTEM_ID', 'POLY_ID': 'POLY_ID', 'DATE_COM': 'DATE_COM', 'TIME_STAMP': 'TIME_STAMP', 'DISP_LABEL': 'DISP_LABEL', 'DATE_CNCL': 'DATE_CNCL', 'EDIT': 'EDIT', 'REVIEW': 'REVIEW', 'LEA_no': 'Lease', });
lyr_Dissolved_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DISPPLY_ID': 'DISPPLY_ID', 'SYSTEM_ID': 'SYSTEM_ID', 'POLY_ID': 'POLY_ID', 'DATE_COM': 'DATE_COM', 'TIME_STAMP': 'TIME_STAMP', 'DISP_LABEL': 'DISP_LABEL', 'DATE_CNCL': 'DATE_CNCL', 'EDIT': 'EDIT', 'REVIEW': 'REVIEW', 'LEA_no': 'LEA_no', });
lyr_monwells_6.set('fieldAliases', {'Monitoring Well ID': 'Monitoring Well ID', 'Easting': 'Easting', 'Northing': 'Northing', 'Zone': 'Zone', 'Grade Elevation (mASL)': 'Grade Elevation (mASL)', 'Start Depth (mbg)': 'Start Depth (mbg)', 'End Depth (mbg)': 'End Depth (mbg)', 'Date of Drilling*': 'Date of Drilling*', });
lyr_CCWDeclineforreviewentities_0.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_ccwdecline_2.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHand': '', 'Text': '', });
lyr_CCW_claimsAug292019_3.set('fieldImages', {'Legacy_Claim_Id': '', 'Township___Area': '', 'Tenure_ID': '', 'Tenure_Type': '', 'Anniversary_Date': '', 'Tenure_Status': '', 'Tenure_Percentage': '', 'Work_Required': '', 'Work_Applied': '', 'Available_Consultation_Reserve': '', 'Available_Exploration_Reserve': '', 'Total_Reserve': '', 'Conversion_Bank_Credit': '', 'Tenure_num': '', 'Title_type': '', 'Title_ty_1': '', 'Tenure_sta': '', 'Tenure_s_1': '', 'Issue_date': '', 'Anniversar': '', 'Extension_': '', 'Holder': '', });
lyr_CSR_leases_Castle_4.set('fieldImages', {'OBJECTID': 'Hidden', 'DISPPLY_ID': 'Hidden', 'SYSTEM_ID': 'Hidden', 'POLY_ID': 'Hidden', 'DATE_COM': 'Hidden', 'TIME_STAMP': 'Hidden', 'DISP_LABEL': 'Hidden', 'DATE_CNCL': 'Hidden', 'EDIT': 'Hidden', 'REVIEW': 'Hidden', 'LEA_no': 'Range', });
lyr_Dissolved_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'DISPPLY_ID': 'TextEdit', 'SYSTEM_ID': 'TextEdit', 'POLY_ID': 'TextEdit', 'DATE_COM': 'DateTime', 'TIME_STAMP': 'TextEdit', 'DISP_LABEL': 'TextEdit', 'DATE_CNCL': 'DateTime', 'EDIT': 'TextEdit', 'REVIEW': 'TextEdit', 'LEA_no': 'Range', });
lyr_monwells_6.set('fieldImages', {'Monitoring Well ID': 'TextEdit', 'Easting': 'Range', 'Northing': 'Range', 'Zone': 'TextEdit', 'Grade Elevation (mASL)': 'TextEdit', 'Start Depth (mbg)': 'Range', 'End Depth (mbg)': 'TextEdit', 'Date of Drilling*': 'TextEdit', });
lyr_CCWDeclineforreviewentities_0.set('fieldLabels', {});
lyr_ccwdecline_2.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_CCW_claimsAug292019_3.set('fieldLabels', {'Legacy_Claim_Id': 'no label', 'Township___Area': 'no label', 'Tenure_ID': 'no label', 'Tenure_Type': 'no label', 'Anniversary_Date': 'no label', 'Tenure_Status': 'no label', 'Tenure_Percentage': 'no label', 'Work_Required': 'no label', 'Work_Applied': 'no label', 'Available_Consultation_Reserve': 'no label', 'Available_Exploration_Reserve': 'no label', 'Total_Reserve': 'no label', 'Conversion_Bank_Credit': 'no label', 'Tenure_num': 'no label', 'Title_type': 'no label', 'Title_ty_1': 'no label', 'Tenure_sta': 'no label', 'Tenure_s_1': 'no label', 'Issue_date': 'no label', 'Anniversar': 'no label', 'Extension_': 'no label', 'Holder': 'no label', });
lyr_CSR_leases_Castle_4.set('fieldLabels', {'LEA_no': 'header label', });
lyr_Dissolved_5.set('fieldLabels', {'OBJECTID': 'no label', 'DISPPLY_ID': 'no label', 'SYSTEM_ID': 'no label', 'POLY_ID': 'no label', 'DATE_COM': 'no label', 'TIME_STAMP': 'no label', 'DISP_LABEL': 'no label', 'DATE_CNCL': 'no label', 'EDIT': 'no label', 'REVIEW': 'no label', 'LEA_no': 'no label', });
lyr_monwells_6.set('fieldLabels', {'Monitoring Well ID': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'Zone': 'no label', 'Grade Elevation (mASL)': 'no label', 'Start Depth (mbg)': 'no label', 'End Depth (mbg)': 'no label', 'Date of Drilling*': 'no label', });
lyr_monwells_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});