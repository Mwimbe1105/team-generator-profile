const renderManager = manager

template = replacePlaceholders(template, "role", intern.getRole());
template = replacePlaceholders(template, "email", intern.getEmail());
template = replacePlaceholders(template, "id", intern.getId());
intern.getId()};
template = replacePlaceholders(template, "school", intern.getSchool());
return template.replace(pattern, value);

const renderMain = html => {

}

const replacePlaceholders = (template.placeholder, value) => {
    const pattern = new RegExp("{{")
}