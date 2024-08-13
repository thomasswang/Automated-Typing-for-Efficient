(
    "Probe Name" Equal to "Cisco_EPNM" and "Alarm Severity" Belong to ("Critical") 
    and
    ( 
        "Domain" Belong to ("Transmission_access","MPLS","IP Internet & Upstream") and "Alarm Name" Belong to ("entsensor_DCVoltage_critical") ) or ( "Domain" Belong to ("IP") and "Alarm Name" Belong to ("POWER_SUPPLY_MISSING") ) 
)