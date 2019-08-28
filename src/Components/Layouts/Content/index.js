import React from 'react';

export default function Content() {

    return (
        <div class="pcoded-content">
            <div class="page-header card">
                <div class="row align-items-end">
                    <div class="col-lg-8">
                        <div class="page-header-title">
                            <i class="feather icon-sidebar bg-c-blue"></i>
                            <div class="d-inline">
                                <h5>Sidebar Fixed</h5>
                                <span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="page-header-breadcrumb">
                            <ul class=" breadcrumb breadcrumb-title">
                                <li class="breadcrumb-item">
                                    <a href="index.html"><i class="feather icon-home"></i></a>
                                </li>
                                <li class="breadcrumb-item"><a href="#!">Page Layout</a>
                                </li>
                                <li class="breadcrumb-item"><a href="#!">Vertical</a>
                                </li>
                                <li class="breadcrumb-item"><a href="#!">Sidebar Fixed</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pcoded-inner-content">
                <div class="main-body">
                    <div class="page-wrapper">

                        <div class="page-body">
                            <div class="row">
                                <div class="col-lg-12">

                                    <div class="card">
                                        <div class="card-block">
                                            <span>
                                                Sidebar Fixed layout is useful for those users who don't want header menu on top.
</span>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header">
                                            <h5>JS Option</h5>
                                        </div>
                                        <div class="card-block">
                                            <span>To use Compact Menu for your project add <code><strong>FixedNavbarPosition: true, FixedHeaderPosition: false,</strong></code> class in js.</span>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header">
                                            <h5>HTML Markup</h5>
                                        </div>
                                        <div class="card-block">
                                            <p>Use the following code to use <strong>Sidebar Layout</strong> in vertical.</p>
                                            <h6 class="m-t-20 f-w-600">Usage:</h6>
    
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header">
                                            <h5>Sample Block</h5>
                                            <div class="card-header-right">
                                                <ul class="list-unstyled card-option">
                                                    <li><i class="icofont icofont-simple-left "></i></li>
                                                    <li><i class="icofont icofont-maximize full-card"></i></li>
                                                    <li><i class="icofont icofont-minus minimize-card"></i></li>
                                                    <li><i class="icofont icofont-refresh reload-card"></i></li>
                                                    <li><i class="icofont icofont-error close-card"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="card-block">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor
                                            at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                                            discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book
                                            is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk
                                            of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original
form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}