# 🚀 Guía de Inicio del Sistema - Orden de Configuración

## 📌 FLUJO CORRECTO PARA INICIAR EL SISTEMA

Cuando ingreses por primera vez, el sistema estará **VACÍO**. Debes seguir este orden específico:

---

## **PASO 1: Iniciar sesión como ADMINISTRADOR** 🔑

```
Usuario: admin
Contraseña: admin123
```

### 1️⃣ Ir a **Configuración** (primer módulo a usar)

El módulo de Configuración es **EXCLUSIVO del Administrador** y contiene 3 pestañas:

#### **Pestaña 1: Ubicaciones**
- ✅ **Crear ubicaciones** donde estarán las herramientas
- Ejemplos a crear:
  - `Bodega Principal`
  - `Estante A1`
  - `Almacén 2`
  - `Taller de Mantenimiento`
  
**¿Por qué primero?** Porque al crear herramientas necesitarás asignarles una ubicación.

#### **Pestaña 2: Modelos**
- ✅ **Crear modelos** de herramientas
- Ejemplos a crear:
  - `Taladro Industrial 2000`
  - `Llave Inglesa 12"`
  - `Multímetro Digital`
  - `Micrómetro Análogo`

**¿Por qué segundo?** Porque al crear herramientas necesitarás seleccionar el modelo.

#### **Pestaña 3: Usuarios**
- ℹ️ Los usuarios ya están creados (admin, bodeguero, cliente)
- Aquí puedes crear más usuarios si necesitas:
  - Más bodegueros
  - Más clientes
  - Más administradores

---

## **PASO 2: Crear una BODEGA** 📦

### Como: **ADMINISTRADOR** (rol 0)

1. Ir al módulo **Bodegas**
2. Clic en **"Crear bodega"**
3. Completar el formulario:
   - **Nombre de la bodega:** Ej: "Bodega Central"
   - **Asignar bodeguero:** Seleccionar `Carlos Bodeguero` (usuario: bodeguero)
   - **Agregar herramientas a la bodega** ➡️ aquí es donde usas las ubicaciones y modelos creados

4. **Agregar herramientas** dentro de la bodega:
   - **Nombre:** Ej: "Taladro eléctrico"
   - **Código:** Ej: "HERR-001"
   - **Serie:** Ej: "SN12345"
   - **Modelo:** Seleccionar de la lista creada (ej: "Taladro Industrial 2000")
   - **Marca:** Ej: "Bosch"
   - **N° Parte:** Ej: "PT-789"
   - **Ubicación:** Seleccionar de la lista creada (ej: "Estante A1")
   - **Estado:** `Disponible`
   - **Tipo:** Ej: "Herramienta eléctrica"
   - **Cantidad:** `1`
   - **Calibración:** `No necesita`
   - **Observación:** Opcional

5. Clic en **Guardar**

**⚠️ IMPORTANTE:** Sin una bodega con herramientas creadas, **NO podrás crear solicitudes ni calibraciones**.

---

## **PASO 3: Crear una SOLICITUD de Préstamo** 📋

### Como: **BODEGUERO** (rol 1) o **ADMINISTRADOR** (rol 0)

```
Usuario: bodeguero
Contraseña: bodega123
```

1. Ir al módulo **Solicitudes**
2. Clic en **"Crear registro"**
3. Completar:
   - **Solicitante:** (se llena automáticamente con tu nombre)
   - **Receptor:** Seleccionar un cliente (ej: "Maria Cliente")
   - **Herramientas:** Seleccionar de la lista de herramientas disponibles
   - **Fecha:** (se llena automáticamente)
   - **Estado:** `No entregado`

4. Clic en **Guardar**

**✅ Lo que sucede:**
- El bodeguero registra qué herramientas presta
- El cliente (receptor) puede ver la solicitud en su módulo de solicitudes
- El estado cambia cuando se entregan las herramientas

---

## **PASO 4: Crear un Registro de CALIBRACIÓN** 🔧

### Como: **BODEGUERO** (rol 1) o **ADMINISTRADOR** (rol 0)

1. Ir al módulo **Calibración**
2. Clic en **"Crear registro"**
3. Completar:
   - **Solicitante:** (tu nombre)
   - **Herramientas:** Seleccionar herramientas que necesitan calibración
   - **Estado:** `En calibración`

4. Clic en **Guardar**

**✅ Lo que sucede:**
- Las herramientas seleccionadas cambian su estado a "En calibración"
- NO estarán disponibles para préstamos mientras estén en calibración

---

## **PASO 5: Como CLIENTE** 👤

### Como: **CLIENTE** (rol 2)

```
Usuario: cliente
Contraseña: cliente123
```

#### ¿Qué puede hacer el cliente?

1. **Ver solicitudes asignadas** a su nombre
   - Módulo **Solicitudes**
   - Solo ve solicitudes donde aparece como "Receptor"

2. **Crear solicitud de préstamo**
   - Clic en **"Crear registro"** (botón específico para clientes)
   - Seleccionar herramientas disponibles
   - El bodeguero recibirá la solicitud

3. **Descargar reportes**
   - Botón de descarga en cada solicitud
   - Genera PDF con el detalle del préstamo

4. **Consultar calibraciones**
   - Módulo **Calibración**
   - Ver qué herramientas están en calibración

---

## 📊 RESUMEN DE ORDEN DE OPERACIONES

```
1. Login ADMIN ➡️ Configuración ➡️ Crear Ubicaciones
                                 ➡️ Crear Modelos
                                 ➡️ Revisar Usuarios

2. Login ADMIN ➡️ Bodegas ➡️ Crear Bodega ➡️ Agregar Herramientas

3. Login BODEGUERO ➡️ Solicitudes ➡️ Crear Solicitud de Préstamo

4. Login BODEGUERO ➡️ Calibración ➡️ Crear Registro de Calibración

5. Login CLIENTE ➡️ Solicitudes ➡️ Ver/Crear Solicitudes
```

---

## 🚨 ERRORES COMUNES

### ❌ "No aparecen herramientas al crear solicitud"
**Solución:** Primero debes crear una bodega con herramientas en estado "Disponible"

### ❌ "No aparecen ubicaciones/modelos al crear herramienta"
**Solución:** El administrador debe ir a Configuración y crear ubicaciones y modelos primero

### ❌ "El cliente no puede crear bodegas"
**Respuesta:** Es correcto, solo ADMINISTRADOR puede crear bodegas

### ❌ "El bodeguero no ve la opción de Configuración"
**Respuesta:** Es correcto, solo el ADMINISTRADOR tiene acceso a Configuración

### ❌ "No puedo editar una solicitud con herramientas entregadas"
**Respuesta:** Es correcto, por seguridad no se pueden editar solicitudes ya completadas

---

## 🎯 DATOS DE PRUEBA SUGERIDOS

### Ubicaciones a crear:
- Bodega Principal
- Estante A1
- Estante A2
- Taller de Mantenimiento
- Almacén 2

### Modelos a crear:
- Taladro Bosch 2000W
- Llave Inglesa 12"
- Multímetro Fluke 87V
- Micrómetro Mitutoyo
- Destornillador Set Stanley

### Herramientas a crear (dentro de una bodega):
1. **Taladro Industrial**
   - Código: HERR-001
   - Modelo: Taladro Bosch 2000W
   - Ubicación: Estante A1
   - Estado: Disponible

2. **Multímetro Digital**
   - Código: HERR-002
   - Modelo: Multímetro Fluke 87V
   - Ubicación: Estante A2
   - Estado: Disponible

3. **Micrómetro de Precisión**
   - Código: HERR-003
   - Modelo: Micrómetro Mitutoyo
   - Ubicación: Bodega Principal
   - Estado: Disponible
   - Calibración: Necesita calibración

---

## ✅ CHECKLIST DE INICIO

- [ ] Login como admin
- [ ] Crear al menos 3 ubicaciones
- [ ] Crear al menos 3 modelos
- [ ] Crear una bodega y asignar al bodeguero
- [ ] Agregar al menos 3 herramientas a la bodega
- [ ] Login como bodeguero
- [ ] Crear una solicitud de préstamo a un cliente
- [ ] Crear un registro de calibración
- [ ] Login como cliente
- [ ] Visualizar solicitudes asignadas

---

**¡Listo! Ahora tu sistema está funcionando completamente.** 🎉
