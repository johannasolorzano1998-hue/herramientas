const mongoose = require('mongoose');

// Cargar dotenv solo si está disponible
try {
  require('dotenv').config({ path: '.env.local' });
} catch (e) {
  console.log('⚠️  dotenv no encontrado, usando variables de entorno del sistema');
}

// Definir el schema
const UserSchema = new mongoose.Schema(
  {
    number: { type: Number },
    usuario: { type: String, unique: true },
    contraseña: { type: String },
    nombre: { type: String },
    correo: { type: String },
    identificacion: { type: String },
    telefono: { type: String },
    rol: { type: Number },
    estado: { type: String },
  },
  { timestamps: true }
);

const UserModel = mongoose.models.Users || mongoose.model('Users', UserSchema);

// Usuarios de prueba
const usuarios = [
  {
    number: 1,
    identificacion: "1234567890",
    usuario: "admin",
    contraseña: "admin123",
    nombre: "Admin Principal",
    correo: "admin@sistema.com",
    telefono: "3001234567",
    rol: 0,
    estado: "Activo"
  },
  {
    number: 2,
    identificacion: "0987654321",
    usuario: "bodeguero",
    contraseña: "bodega123",
    nombre: "Carlos Bodeguero",
    correo: "bodeguero@sistema.com",
    telefono: "3009876543",
    rol: 1,
    estado: "Activo"
  },
  {
    number: 3,
    identificacion: "1122334455",
    usuario: "cliente",
    contraseña: "cliente123",
    nombre: "Maria Cliente",
    correo: "cliente@sistema.com",
    telefono: "3005556677",
    rol: 2,
    estado: "Activo"
  }
];

async function insertUsers() {
  try {
    // Conectar a MongoDB
    const MONGODB_URI = process.env.MONGODB_URI;
    
    if (!MONGODB_URI) {
      throw new Error('Por favor define MONGODB_URI en .env.local');
    }

    console.log('Conectando a MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Conectado a MongoDB exitosamente\n');

    // Eliminar usuarios existentes con los mismos nombres de usuario (opcional)
    console.log('Verificando usuarios existentes...');
    for (const usuario of usuarios) {
      const exists = await UserModel.findOne({ usuario: usuario.usuario });
      if (exists) {
        console.log(`⚠️  Usuario "${usuario.usuario}" ya existe. Eliminando...`);
        await UserModel.deleteOne({ usuario: usuario.usuario });
      }
    }

    // Insertar usuarios
    console.log('\nInsertando usuarios...\n');
    for (const userData of usuarios) {
      const user = new UserModel(userData);
      await user.save();
      console.log(`✅ Usuario creado: ${userData.nombre} (${userData.usuario}) - Rol ${userData.rol}`);
    }

    console.log('\n✅ Todos los usuarios han sido insertados exitosamente!\n');
    console.log('═══════════════════════════════════════════════════════');
    console.log('📋 USUARIOS DE PRUEBA CREADOS:');
    console.log('═══════════════════════════════════════════════════════');
    console.log('1️⃣  ADMINISTRADOR (Rol 0)');
    console.log('   Usuario: admin');
    console.log('   Contraseña: admin123');
    console.log('   Nombre: Admin Principal\n');
    console.log('2️⃣  BODEGUERO (Rol 1)');
    console.log('   Usuario: bodeguero');
    console.log('   Contraseña: bodega123');
    console.log('   Nombre: Carlos Bodeguero\n');
    console.log('3️⃣  CLIENTE (Rol 2)');
    console.log('   Usuario: cliente');
    console.log('   Contraseña: cliente123');
    console.log('   Nombre: Maria Cliente');
    console.log('═══════════════════════════════════════════════════════\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    // Cerrar conexión
    await mongoose.connection.close();
    console.log('Conexión cerrada.');
    process.exit(0);
  }
}

insertUsers();
