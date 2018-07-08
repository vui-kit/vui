import Vue from 'vue'

/*** IMPORT GLOBAL STYLES **************************/
import './vui.css'

/*** IMPORT GLOBAL FILTERS **************************/
import './vui_filters.js'

/*** IMPORT GLOBAL DIRECTIVES **************************/
import './directives/BorderDirective.js'
import './directives/DragDirective.js'
import './directives/ColorsDirective.js'
import './directives/FloatDirective.js'
import './directives/ShadowDirective.js'
import './directives/FontDirective.js'
import './directives/AlignDirective.js'

/*** IMPORT GLOBAL COMPONENTS **************************/
import Accordion from "@/vui/components/Accordion"
import AccordionPanel from "@/vui/components/AccordionPanel"
import Alert from "@/vui/components/Alert"
import AlertLink from "@/vui/components/AlertLink"
import Badge from "@/vui/components/Badge"
import Breadcrumb from "@/vui/components/Breadcrumb"
import BreadcrumbItem from "@/vui/components/BreadcrumbItem"
import Button from "@/vui/components/Button"
import ButtonGroup from "@/vui/components/ButtonGroup"
import Callout from "@/vui/components/Callout"
import Card from "@/vui/components/Card"
import CardHeader from "@/vui/components/CardHeader"
import CardBody from "@/vui/components/CardBody"
import CardTitle from "@/vui/components/CardTitle"
import CardSubtitle from "@/vui/components/CardSubtitle"
import CardText from "@/vui/components/CardText"
import CardLink from "@/vui/components/CardLink"
import CardImage from "@/vui/components/CardImage"
import CardFooter from "@/vui/components/CardFooter"
import Checkbox from "@/vui/components/Checkbox"
import Container from "@/vui/components/Container"
import DataTable from "@/vui/components/DataTable"
import Dtable from "@/vui/components/Dtable"
import Dthead from "@/vui/components/Dthead"
import DataTableBody from "@/vui/components/DataTableBody"
import DataTableRow from "@/vui/components/DataTableRow"
import DtheadCol from "@/vui/components/DtheadCol"
import DataTableCaption from "@/vui/components/DataTableCaption"
import Datepicker from "@/vui/components/Datepicker"
import DropdownItem from "@/vui/components/DropdownItem"
import DropdownItemText from "@/vui/components/DropdownItemText"
import DropdownItemHeader from "@/vui/components/DropdownItemHeader"
import DropdownDivider from "@/vui/components/DropdownDivider"
import DropdownButton from "@/vui/components/DropdownButton"
import DropdownButtonSplit from "@/vui/components/DropdownButtonSplit"
import DropdownLink from "@/vui/components/DropdownLink"
import DropdownSelect from "@/vui/components/DropdownSelect"
import DropdownSelectOption from "@/vui/components/DropdownSelectOption"

import Fieldset from "@/vui/components/Fieldset"
import Form from "@/vui/components/Form"
import FormLabel from "@/vui/components/FormLabel"
import FormHelpText from "@/vui/components/FormHelpText"
import FormRow from "@/vui/components/FormRow"
import FormCol from "@/vui/components/FormCol"
import FormGroup from "@/vui/components/FormGroup"
import FormGroupRow from "@/vui/components/FormGroupRow"
import Icon from "@/vui/components/Icon"
import IconStack from "@/vui/components/IconStack"
import ImgPlaceholder from "@/vui/components/ImgPlaceholder"
import InputGroup from "@/vui/components/InputGroup"
import InputGroupPrepend from "@/vui/components/InputGroupPrepend"
import InputGroupAppend from "@/vui/components/InputGroupAppend"
import Input from "@/vui/components/Input"
import InputFile from "@/vui/components/InputFile"
import InputFileButton from "@/vui/components/InputFileButton"
import Jumbotron from "@/vui/components/Jumbotron"
import Legend from "@/vui/components/Legend"
import ListGroup from "@/vui/components/ListGroup"
import ListGroupItem from "@/vui/components/ListGroupItem"
import Modal from "@/vui/components/Modal"
import Nav from "@/vui/components/Nav"
import Navbar from "@/vui/components/Navbar"
import NavbarBrand from "@/vui/components/NavbarBrand"
import NavbarToggler from "@/vui/components/NavbarToggler"
import NavbarCollapse from "@/vui/components/NavbarCollapse"
import NavbarNav from "@/vui/components/NavbarNav"
import NavItem from "@/vui/components/NavItem"
import NavbarItem from "@/vui/components/NavbarItem"
import NavbarItemDropdown from "@/vui/components/NavbarItemDropdown"
import NavbarText from "@/vui/components/NavbarText"
import Option from "@/vui/components/Option"
import Pagination from '@/vui/components/Pagination'
import Progress from '@/vui/components/Progress'
import ProgressBar from '@/vui/components/ProgressBar'
import Radio from "@/vui/components/Radio"
import Row from "@/vui/components/Row"
import Select from "@/vui/components/Select"
import Textarea from "@/vui/components/Textarea"

/*** IMPORT GLOBAL WIDGETS ****************************/
import CodePanel from "@/vui/widgets/CodePanel"
//import LoginPanel from "@/vui/widgets/LoginPanel"
//import TabsPanel from "@/vui/widgets/TabsPanel"


/*** REGISTER GLOBAL COMPONENTS ************************/
Vue.component('vuiAccordion', Accordion)
Vue.component('vuiAccordionPanel', AccordionPanel)
Vue.component('vuiAlert', Alert)
Vue.component('vuiAlertLink', AlertLink)
Vue.component('vuiBadge', Badge)
Vue.component('vuiBreadcrumb', Breadcrumb)
Vue.component('vuiBreadcrumbItem', BreadcrumbItem)
Vue.component('vuiButton', Button)
Vue.component('vuiButtonGroup', ButtonGroup)

Vue.component('vuiCallout', Callout)
Vue.component('vuiCard', Card)
Vue.component('vuiCardHeader', CardHeader)
Vue.component('vuiCardBody', CardBody)
Vue.component('vuiCardTitle', CardTitle)
Vue.component('vuiCardSubtitle', CardSubtitle)
Vue.component('vuiCardText', CardText)
Vue.component('vuiCardLink', CardLink)
Vue.component('vuiCardImage', CardImage)
Vue.component('vuiCardFooter', CardFooter)
Vue.component('vuiCheckbox', Checkbox)
Vue.component('vuiContainer', Container)

Vue.component('vuiDataTable', DataTable)
Vue.component('vuiDtable', Dtable)
Vue.component('vuiDthead', Dthead)
Vue.component('vuiDataTableBody', DataTableBody)
Vue.component('vuiDataTableRow', DataTableRow)
Vue.component('vuiDtheadCol', DtheadCol)
Vue.component('vuiDataTableCaption', DataTableCaption)

Vue.component('vuiDatepicker', Datepicker)
Vue.component('vuiDropdownButton', DropdownButton)
Vue.component('vuiDropdownButtonSplit', DropdownButtonSplit)
Vue.component('vuiDropdownItem', DropdownItem)
Vue.component('vuiDropdownItemHeader', DropdownItemHeader)
Vue.component('vuiDropdownItemText', DropdownItemText)
Vue.component('vuiDropdownDivider', DropdownDivider)
Vue.component('vuiDropdownLink', DropdownLink)
Vue.component('vuiDropdownSelect', DropdownSelect)
Vue.component('vuiDropdownSelectOption', DropdownSelectOption)

Vue.component('vuiFieldset', Fieldset)
Vue.component('vuiForm', Form)
Vue.component('vuiFormLabel', FormLabel)
Vue.component('vuiFormHelpText', FormHelpText)
Vue.component('vuiFormRow', FormRow)
Vue.component('vuiFormCol', FormCol)
Vue.component('vuiFormGroup', FormGroup)
Vue.component('vuiFormGroupRow', FormGroupRow)
Vue.component('vuiIcon', Icon)
Vue.component('vuiIconStack', IconStack)
Vue.component('vuiImgPlaceholder', ImgPlaceholder)
Vue.component('vuiInputGroup', InputGroup)
Vue.component('vuiInputGroupPrepend', InputGroupPrepend)
Vue.component('vuiInputGroupAppend', InputGroupAppend)
Vue.component('vuiInput', Input)
Vue.component('vuiInputFile', InputFile)
Vue.component('vuiInputFileButton', InputFileButton)
Vue.component('vuiJumbotron', Jumbotron)
Vue.component('vuiLegend', Legend)
Vue.component('vuiListGroup', ListGroup)
Vue.component('vuiListGroupItem', ListGroupItem)
Vue.component('vuiModal', Modal)
Vue.component('vuiNav', Nav)
Vue.component('vuiNavbar', Navbar)
Vue.component('vuiNavbarBrand', NavbarBrand)
Vue.component('vuiNavbarToggler', NavbarToggler)
Vue.component('vuiNavbarCollapse', NavbarCollapse)
Vue.component('vuiNavbarNav', NavbarNav)
Vue.component('vuiNavItem', NavItem)
Vue.component('vuiNavbarItem', NavbarItem)
Vue.component('vuiNavbarItemDropdown', NavbarItemDropdown)
Vue.component('vuiNavbarText', NavbarText)

Vue.component('vuiOption', Option)
Vue.component('vuiPagination', Pagination)
Vue.component('vuiProgress', Progress)
Vue.component('vuiProgressBar', ProgressBar)
Vue.component('vuiRadio', Radio)
Vue.component('vuiRow', Row)
Vue.component('vuiSelect', Select)
Vue.component('vuiTextarea', Textarea)

/*** REGISTER GLOBAL WIDGETS ****************************/
Vue.component('vuiCodePanel', CodePanel)
//Vue.component('vuiLoginPanel', LoginPanel)
//Vue.component('vuiTabsPanel', TabsPanel)