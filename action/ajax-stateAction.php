<?php
	require_once("action/CommonAction.php");

	class ajaxStateAction extends CommonAction {

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_MEMBER);
		}

		protected function executeAction() {
			$result=[];
			if (isset($_SESSION["key"])) {
				$data=[];
				$data["key"] = $_SESSION["key"];
				$result=parent::callAPI("games/state", $data);
			}

			return compact("result");
		}
	}