<template>
    <div id="app">
        <file-pond
            name="test"
            ref="pond"
            label-idle="Drop files here..."
            allow-multiple="true"
            accepted-file-types="image/jpeg, image/png, video/mp4"
            :files="myFiles"
            @init="handleFilePondInit"
        />
        <div v-for="(item, index) in myFiles" :key="index">
            <div>
                {{ item }}
            </div>
        </div>
    </div>
</template>

<script>
    // Import Vue FilePond
    import vueFilePond from 'vue-filepond';

    // Import FilePond styles
    import 'filepond/dist/filepond.min.css';

    // Import FilePond plugins
    // Please note that you need to install these plugins separately

    // Import image preview plugin styles
    import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

    // Import image preview and file type validation plugins
    import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
    import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

    // Create component
    const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview);

    export default {
        name: 'Upload',
        data() {
            return {
                myFiles: [],
            };
        },
        methods: {
            handleFilePondInit(item) {
                this.myFiles.push(item);
            }
        },
        components: {
            FilePond
        }
    };
</script>