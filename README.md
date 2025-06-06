# 🐉 Zodiaco Chino - Proyecto Spring MVC

Este es un proyecto web desarrollado en **Spring Boot (MVC)** que permite al usuario ingresar su año de nacimiento y obtener su **signo del zodiaco chino**, acompañado de una breve **descripción** y un **ícono representativo**.

---

## 🌐 Tecnologías utilizadas

- 🔧 **Spring Boot (MVC)**
- 🎨 **Thymeleaf** (motor de plantillas)
- 💅 **Bootstrap 5** (estilos responsivos)
- ⭐ **Font Awesome 6** (íconos de los signos)
- 🌍 **HTML5 & CSS3**
- 🧪 **Java 21** (puede ajustarse a otras versiones compatibles)

---

## 🚀 Funcionalidad

1. El usuario ingresa su **año de nacimiento**.
2. El sistema calcula su **signo del zodiaco chino** en base al módulo 12 (`año % 12`).
3. Se muestra:
    - El **nombre del signo**.
    - Un **ícono** alusivo.
    - Una **descripción** del signo.
    - El año ingresado.

---

## 📁 Estructura del proyecto

ZodiacoChino/
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── pe/
│   │   │       └── idat/
│   │   │           └── EC01_ZodiacoChino/
│   │   │               ├── Controllers/
│   │   │               │   └── ZodiacoController.java
│   │   │               ├── Models/
│   │   │               │   └── ZodiacoInfo.java
│   │   │               └── EC01ZodiacoChinoApplication.java
│   │   ├── resources/
│   │   │   ├── static/
│   │   │   │   └── css/
│   │   │   │       └── styles.css
│   │   │   ├── templates/
│   │   │   │   ├── index.html
│   │   │   │   └── resultado.html
│   │   │   └── application.properties
│   └── test/
│       └── ...
├── pom.xml
└── README.md




---

## 📝 Clases clave

### `ZodiacoController.java`
Controlador que maneja:
- La ruta `/` (formulario).
- La ruta `/calcular` (procesamiento del año ingresado).

### `ZodiacoInfo.java`
Modelo para representar la información adicional del signo:
- `icon`: clase Font Awesome.
- `description`: texto explicativo del signo.

---

## 💡 Lógica de cálculo

```java
String[] signos = {
    "Mono", "Gallo", "Perro", "Cerdo", "Rata", "Buey",
    "Tigre", "Conejo", "Dragón", "Serpiente", "Caballo", "Cabra"
};

String signo = signos[anio % 12];

