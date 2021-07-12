export class Persona {
  private _id: number=0;
  private _cedula:string="";
  private _nombre:string="";
  private _apellido:string="";
  private _email:string="";
  private _telefono:string="";
  private _direccion: string="";
  private _longitud:number=0;
  private _latitud:number=0;







    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter cedula
     * @return {string}
     */
	public get cedula(): string {
		return this._cedula;
	}

    /**
     * Getter nombre
     * @return {string}
     */
	public get nombre(): string {
		return this._nombre;
	}

    /**
     * Getter apellido
     * @return {string}
     */
	public get apellido(): string {
		return this._apellido;
	}

    /**
     * Getter email
     * @return {string}
     */
	public get email(): string {
		return this._email;
	}

    /**
     * Getter telefono
     * @return {string}
     */
	public get telefono(): string {
		return this._telefono;
	}

    /**
     * Getter direccion
     * @return {string}
     */
	public get direccion(): string {
		return this._direccion;
	}

    /**
     * Getter longitud
     * @return {number}
     */
	public get longitud(): number {
		return this._longitud;
	}

    /**
     * Getter latitud
     * @return {number}
     */
	public get latitud(): number {
		return this._latitud;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter cedula
     * @param {string} value
     */
	public set cedula(value: string) {
		this._cedula = value;
	}

    /**
     * Setter nombre
     * @param {string} value
     */
	public set nombre(value: string) {
		this._nombre = value;
	}

    /**
     * Setter apellido
     * @param {string} value
     */
	public set apellido(value: string) {
		this._apellido = value;
	}

    /**
     * Setter email
     * @param {string} value
     */
	public set email(value: string) {
		this._email = value;
	}

    /**
     * Setter telefono
     * @param {string} value
     */
	public set telefono(value: string) {
		this._telefono = value;
	}

    /**
     * Setter direccion
     * @param {string} value
     */
	public set direccion(value: string) {
		this._direccion = value;
	}

    /**
     * Setter longitud
     * @param {number} value
     */
	public set longitud(value: number) {
		this._longitud = value;
	}

    /**
     * Setter latitud
     * @param {number} value
     */
	public set latitud(value: number) {
		this._latitud = value;
	}




  }
