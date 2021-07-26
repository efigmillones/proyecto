export interface productsInterface {
    _id:              ID;
    CODIGO:           string;
    NOMBRE:           string;
    UNITID:           string;
    "PRECIO VENTA":   number;
    COSTO_FINANCIERO: string;
    IDLINEA:          Idcategoria;
    IDCATEGORIA:      Idcategoria;
    CodIDProveedor:   string;
    ESTADO:           string;
    TIPOFABRICANTE:   string;
    NUMERO_PARTE:     string;
    LINEA:            string;
    CATEGORIA:        string;
    UEN:              string;
    MARCA:            string;
    "PRECIO MINIMO":  number;
    DESCRIPCION:      string;
    "IMAGEN 150":     string;
    "IMAGEN 450":     string;
}

export interface Idcategoria {
    $numberLong: string;
}

export interface ID {
    $oid: string;
}

export interface filtro {
    categoria:  string;
    marca:      string;
    nombre:     string;
}