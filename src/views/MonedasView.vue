<script setup>

</script>

<template>
    <!-- Add New User Modal Start -->
    <div class="modal fade" tabindex="-1" id="addNewUserModal">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title">Add New User</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="modal-body">
                <form id="add-user-form" class="p-2" novalidate>
                    <div class="row mb-3 gx-3">
                    <div class="col">
                        <input type="text" name="fname" class="form-control form-control-lg" placeholder="Enter First Name" required>
                        <div class="invalid-feedback">First name is required!</div>
                    </div>

                    <div class="col">
                        <input type="text" name="lname" class="form-control form-control-lg" placeholder="Enter Last Name" required>
                        <div class="invalid-feedback">Last name is required!</div>
                    </div>
                    </div>

                    <div class="mb-3">
                    <input type="email" name="email" class="form-control form-control-lg" placeholder="Enter E-mail" required>
                    <div class="invalid-feedback">E-mail is required!</div>
                    </div>

                    <div class="mb-3">
                        <input type="tel" name="phone" class="form-control form-control-lg" placeholder="Enter Phone" required>
                        <div class="invalid-feedback">Phone is required!</div>
                    </div>

                    <div class="mb-3 custom-file">
                        <input type="file" class="form-control form-control-lg custom-file-input" id="frente-img" lang="es">
                        <label class="custom-file-label" for="frente-img">Moneda Frente</label>
                    </div>

                    <div class="mb-3 custom-file">
                        <input type="file" class="form-control form-control-lg custom-file-input" id="dorso-img" lang="es">
                        <label class="custom-file-label" for="dorso-img">Moneda Dorso</label>
                    </div>

                    <div class="mb-3">
                        <input type="submit" value="Add User" class="btn btn-primary btn-block btn-lg" id="add-user-btn">
                    </div>
                </form>
            </div>
        </div>
        </div>
    </div>
    <!-- Add New User Modal End -->

    <div>
        <div class="card">
            <div class="card-body">
                <div class="row mt-4">
                    <div class="col-lg-12 d-flex justify-content-between align-items-center">
                        <div>
                            <h4 class="text-primary">Monedas</h4>
                        </div>
                        <div>
                            <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#addNewUserModal">Agregar Moneda</button>
                        </div>
                    </div>
                </div>
                <hr/>
                <div class="row">
                    <div class="col-lg-12">
                        <table class="table table-striped table-bordered text-center">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Valor</th>
                                    <th scope="col">Descripcion</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>10</td>
                                    <td>Billete 10 Pesos</td>
                                    <td class="text-right">                                
                                        <button class="btn btn-primary mr-1">Editar</button>
                                        <button class="btn btn-danger">Eliminar</button>                               
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>20</td>
                                    <td>Billete 20 Pesos</td>
                                    <td class="text-right">
                                        <button type="button" class="btn btn-primary mr-1">Editar</button>
                                        <button type="button" class="btn btn-danger">Eliminar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>50</td>
                                    <td>Billete 50 Pesos</td>
                                    <td class="text-right">
                                        <button type="button" class="btn btn-primary mr-1">Editar</button>
                                        <button type="button" class="btn btn-danger">Eliminar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>       
    </div>
</template>

