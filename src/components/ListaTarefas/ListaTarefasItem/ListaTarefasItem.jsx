import { useAppContext } from "../../../hooks";
import { Botao, TIPO_BOTAO } from "../../Botao";
import { CampoTexto } from "../../../components";

import style from "./ListaTarefasItem.module.css";
import { useState } from "react";

const ListaTarefasItem = (props) => {
  const { id, nome } = props;

  const [estaEditando, setEstaEditando] = useState(false);

  const { editarTarefa, removerTarefa } = useAppContext();

  return (
    <li className={style.ListaTarefasItem}>
      {estaEditando && (
        <CampoTexto
          defaultValue={nome}
          onChange={(event) => editarTarefa(id, event.currentTarget.value)}
          onBlur={() => setEstaEditando(false)}
          autoFocus
        />
      )}
      {!estaEditando && (
        <span onDoubleClick={() => setEstaEditando(true)}>{nome}</span>
      )}
      <Botao
        texto="-"
        tipo={TIPO_BOTAO.SECUNDARIO}
        onClick={() => removerTarefa(id)}
      />
    </li>
  );
};

export { ListaTarefasItem };
