/* @flow */

export default function bind(el: ASTElement, dir: ASTDirective) {
	el.wrapData = (code: string) => {
		return `_b(${code},'${el.tag}',${dir.value},${dir.modifiers && dir.modifiers.prop ? 'true' : 'false'}${
			dir.modifiers && dir.modifiers.sync ? ',true' : ''
		})`
	}
}

// 改进v-bind实现并使其在组件上工作
