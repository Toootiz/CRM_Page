import { TranslationMessages } from 'ra-core';

const spanishMessages: TranslationMessages = {
    ra: {
        action: {
            add_filter: 'Agregar filtro',
            add: 'Agregar',
            back: 'Regresar',
            bulk_actions: '1 objeto seleccionado |||| %{smart_count} objetos seleccionados',
            cancel: 'Cancelar',
            clear_array_input: 'Limpiar lista',
            clear_input_value: 'Limpiar valor',
            clone: 'Clonar',
            confirm: 'Confirmar',
            create: 'Crear',
            create_item: 'Crear %{item}',
            delete: 'Eliminar',
            edit: 'Editar',
            export: 'Exportar',
            list: 'Lista',
            refresh: 'Recargar',
            remove_filter: 'Eliminar filtro',
            remove_all_filters: 'Eliminar todos los filtros',
            remove: 'Remover',
            save: 'Guardar',
            search: 'Buscar',
            select_all: 'Seleccionar todos',
            select_row: 'Seleccionar esta fila',
            show: 'Mostrar',
            sort: 'Ordenar',
            undo: 'Deshacer',
            unselect: 'Deseleccionar',
            expand: 'Expandir',
            close: 'Cerrar',
            open_menu: 'Abrir menu',
            close_menu: 'Cerrar menu',
            update: 'Actualizar',
            move_up: 'Mover hacia arriba',
            move_down: 'Mover hacia abajo',
            open: 'Abrir',
            toggle_theme: 'Cambiar a modo claro/oscuro',
            select_columns: 'Columnas',
            update_application: 'Recargar aplicación',
        },
        boolean: {
            true: 'Si',
            false: 'No',
            null: ' ',
        },
        page: {
            create: 'Crear %{name}',
            dashboard: 'Dashboard',
            edit: '%{name} %{recordRepresentation}',
            error: '¡Ups! Algo salió mal...',
            list: '%{name}',
            loading: 'Cargando...',
            not_found: 'Dato no encontrado',
            show: '%{name} %{recordRepresentation}',
            empty: '%{name} sin llenar.',
            invite: '¿Desea agregar uno?',
        },
        input: {
            file: {
                upload_several:
                    'Arrastre un archivo o de clic para seleccionar uno.',
                upload_single: 'Arrastre el archivo o de clic para seleccionarlo.',
            },
            image: {
                upload_several:
                    'Arrastre una imagen o de click para sleccionar una.',
                upload_single:
                    'Arrastre una imagen o de clic para seleccionarla.',
            },
            references: {
                all_missing: 'Error, no fue posible encontrar dato de referencia.',
                many_missing:
                    'Error, al menos una referencia asociada puede ya no estar dispoible.',
                single_missing:
                    'Error, la referencia asociada puede ya no estar disponible.',
            },
            password: {
                toggle_visible: 'Ocultar contraseña',
                toggle_hidden: 'Mostar contraseña',
            },
        },
        message: {
            about: 'Acerca de',
            are_you_sure: '¿Está seguro?',
            auth_error:
                'Un error se ha encontrado al validar las credenciales.',
            bulk_delete_content:
                '¿Está seguro que desea eliminar este %{name}? |||| ¿Está seguro que desea eliminar estos %{smart_count} elementos?',
            bulk_delete_title:
                'Eliminar %{name} |||| Eliminar %{smart_count} %{name}',
            bulk_update_content:
                '¿Está seguro que desea actualizar este %{name}? |||| ¿Está segurp que desea actualizar estos %{smart_count} elementos?',
            bulk_update_title:
                'Actualizar %{name} |||| Actualizar %{smart_count} %{name}',
            clear_array_input: 'Are you sure you want to clear the whole list?',
            delete_content: '¿Está seguro de que desea eliminar este elemento?',
            delete_title: 'Eliminar %{name} #%{id}',
            details: 'Detalles',
            error: "Error al contactar con el servidor.",

            invalid_form: 'El formulario no es válido. Por favor, corrija cualquier error',
            loading: 'Por favor espere...',
            no: 'No',
            not_found:
                'Error de URL. Es posible que lo hayas escrito mal, o el URL ya no funciona.',
            yes: 'Yes',
            unsaved_changes:
                "Algunos cambios no se han guardado. ¿Está seguro que quiere ignorarlos?",
        },
        navigation: {
            clear_filters: 'Limpiar filtros',
            no_filtered_results:
                'No se han encontrado %{resource} que coincidan con el filtro',
            no_results: 'No se han encontrado %{resource}',
            no_more_results:
                'La página número %{page} excede el número de páginas. Por favor, pruebe la página anterior.',
            page_out_of_boundaries: 'Página número %{page} excede el número de páginas',
            page_out_from_end: 'No se puede acceder a la página siguiente',
            page_out_from_begin: 'No se puede ir a una página antes de la 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} de %{total}',
            partial_page_range_info:
                '%{offsetBegin}-%{offsetEnd} de más de %{offsetEnd}',
            current_page: 'Página %{page}',
            page: 'Ir a página %{page}',
            first: 'ir a la primera página',
            last: 'Ir a la última página',
            next: 'Página siguiente',
            previous: 'Página anterior',
            page_rows_per_page: 'Filas por página:',
            skip_nav: 'Saltar al conetnido',
        },
        sort: {
            sort_by: 'Ordenar por %{field} %{order}',
            ASC: 'ascendente',
            DESC: 'descendente',
        },
        auth: {
            auth_check_error: 'Por favor inicia sesión para continuar',
            user_menu: 'Perfil',
            username: 'Usuario',
            password: 'Contraseña',
            sign_in: 'Registrarse',
            sign_in_error: 'Arror de autentificación. Intente de nuevo.',
            logout: 'cerrar sesión',
        },
        notification: {
            updated: 'Elemento actualizado. |||| %{smart_count} elementos actualizados',
            created: 'Elemento creado',
            deleted: 'Elemento eliminado |||| %{smart_count} elementos eliminados',
            bad_item: 'elemento incorrecto',
            item_doesnt_exist: 'elemento no existe.',
            http_error: 'error de comunicación con el servidor',
            data_provider_error:
                'Error del proveedor de información. Revise la consola para más detalles.',
            i18n_error:
                'Error de traducción. No se puede cargar las traducciones del lenguaje especificado.',
            canceled: 'Acción cancelada',
            logged_out: 'Su sesión ha terminado. Por favor, vuelva a conectarse.',
            not_authorized: "Usted no cuenta con los permisos para acceder a este contenido.",
            application_update_available: 'Una nueva versión está disponible',
        },
        validation: {
            required: 'Obligatorio',
            minLength: 'Debe tener una extensión mínima de %{min} caracteres',
            maxLength: 'Debe tener una extensión máxima de %{max} caracteres',
            minValue: 'Debe ser mínimo %{min}',
            maxValue: 'Debe ser máximo %{max} o menos',
            number: 'Debe ser un número',
            email: 'Debe ser un correo electrónico válido',
            oneOf: 'Debe ser alguna de las siguientes: %{options}',
            regex: 'Debe tener un formato (regexp): %{pattern}',
            unique: 'Debe ser único',
        },
        saved_queries: {
            label: 'Consulta guardada',
            query_name: 'Nombre de la consulta',
            new_label: 'Guardar consulta actual...',
            new_dialog_title: 'Guardar consulta actual como',
            remove_label: 'Eliminar consulta actual',
            remove_label_with_name: 'Eliminar consulta "%{name}"',
            remove_dialog_title: '¿Eliminar consulta guardada?',
            remove_message:
                '¿Está seguro que desea eliminiar este elemento de su lista de consultas guardadas?',
            help: 'Filtrar esta lista y guardar esta consulta para más tarde',
        },
        configurable: {
            customize: 'Personalizar',
            configureMode: 'Configurar página',
            inspector: {
                title: 'Inspeccionar',
                content: 'Seleccione el elemento que desee configurar',
                reset: 'Reiniciar configuración',
                hideAll: 'Ocultar todos',
                showAll: 'Mostrar todos',
            },
            Datagrid: {
                title: 'Tabla',
                unlabeled: 'columna #%{column} sin llenar',
            },
            SimpleForm: {
                title: 'Formulario',
                unlabeled: 'dato #%{input} sin llenar',
            },
            SimpleList: {
                title: 'Lista',
                primaryText: 'Texto principal',
                secondaryText: 'Texto secundario',
                tertiaryText: 'Texto terciario',
            },
        },
    },
};

export default spanishMessages;